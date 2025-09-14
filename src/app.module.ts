import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";
import { PrometheusModule } from "@willsoto/nestjs-prometheus";
import { CacheModule } from "@nestjs/cache-manager";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./core/database/database.module";
import { ApiModule } from "./api/api.module";
import { HttpModule } from "@nestjs/axios";
import { MILLISECONDS } from "./core/constants";
import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from "@aws-sdk/client-secrets-manager";
import * as dotenv from "dotenv";
import { UsersModule } from './users/users.module';
import { BillsModule } from './bills/bills.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        async () => {
          const validate = (
            keys: NodeJS.ProcessEnv | dotenv.DotenvConfigOutput
          ) => {
            const validationSchema = Joi.object({
              NODE_ENV: Joi.string()
                .valid("development", "production", "test", "provision")
                .default("development"),
              PORT: Joi.number().default(8020),
              DB_HOST: Joi.string().required(),
              DB_PORT: Joi.string().required(),
              DB_USERNAME: Joi.string().required(),
              DB_NAME: Joi.string().required(),
              DB_REGION: Joi.string().required(),
              DB_DIALECT: Joi.string().required(),
              DB_CERT: Joi.string().optional(),
              DB_SYNC: Joi.string().allow("").optional(),
              API_URL: Joi.string().optional(),
              AWS_BUCKET_NAME: Joi.string().optional(),
              AWS_S3_ENDPOINT: Joi.string().optional(),
            }).unknown();

            const { value: envVars, error } = validationSchema
              .prefs({ errors: { label: "key" } })
              .validate(keys);

            if (error) {
              throw new Error(`Config validation error: ${error.message}`);
            }

            return envVars;
          };

          if (process.env.AWS_SECRETSMANAGER_ENTRY) {
            const command = new GetSecretValueCommand({
              SecretId: process.env.AWS_SECRETSMANAGER_ENTRY,
            });

            const secretsManagerClient = new SecretsManagerClient({
              region: process.env.AWS_REGION,
            });

            const keys =
              (await secretsManagerClient.send(command)).SecretString || "";
            const envs = dotenv.parse(Buffer.from(keys));

            return validate(envs);
          }

          return validate(process.env);
        },
      ],
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60,
          limit: 1000,
        },
      ],
    }),
    PrometheusModule.register({
      path: "/metrics",
      defaultMetrics: { enabled: true },
    }),
    CacheModule.register({
      isGlobal: true,
    }),
    HttpModule.register({
      timeout: MILLISECONDS.IN_MINUTE,
    }),
    DatabaseModule,
    ApiModule,
    UsersModule,
    BillsModule,
  ],
  controllers: [AppController],
  exports: [DatabaseModule, ApiModule, HttpModule],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
