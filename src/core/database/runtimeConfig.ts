// src/core/database/runtimeConfig.ts
import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { Options as SequelizeOptions } from 'sequelize';
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import { Signer } from '@aws-sdk/rds-signer';

dotenv.config();
const envs = process.env;

function baseConfig(): SequelizeOptions {
  return {
    username: envs.DB_USERNAME || 'postgres',
    password: envs.DB_PASSWORD || '',
    database: envs.DB_NAME || 'postgres',
    host: envs.DB_HOST || '127.0.0.1',
    port: Number(envs.DB_PORT) || 5432,
    dialect: 'postgres',
    dialectOptions: envs.DB_CERT
      ? {
          ssl: {
            ca: fs.readFileSync(path.resolve(envs.DB_CERT)).toString(),
            rejectUnauthorized: true,
          },
        }
      : {},
    define: {
      underscored: true,
      timestamps: true,
    },
    logging: false,
  };
}

/**
 * If you run in AWS and want to use Secrets Manager + RDS IAM auth,
 * call getRuntimeConfig() (async) to get the final SequelizeOptions.
 */
export async function getRuntimeConfig(): Promise<SequelizeOptions> {
  const cfg = baseConfig();

  // If not using AWS secrets/IAM, return immediately
  if (!envs.AWS_SECRETSMANAGER_ENTRY && (!envs.USE_RDS_IAM || envs.NODE_ENV === 'development')) {
    return cfg;
  }

  // If AWS SecretsManager entry provided, load it and merge
  if (envs.AWS_SECRETSMANAGER_ENTRY) {
    const sm = new SecretsManagerClient({ region: envs.AWS_REGION });
    const cmd = new GetSecretValueCommand({ SecretId: envs.AWS_SECRETSMANAGER_ENTRY });
    const secretVal = await sm.send(cmd);
    if (secretVal.SecretString) {
      const parsed = JSON.parse(secretVal.SecretString);
      // map common fields if present
      cfg.username = parsed.username || cfg.username;
      cfg.password = parsed.password || cfg.password;
      cfg.database = parsed.dbname || parsed.database || cfg.database;
      cfg.host = parsed.host || cfg.host;
      cfg.port = parsed.port ? Number(parsed.port) : cfg.port;
    }
  }

  // If you need RDS IAM auth (token) instead of password
  if (envs.USE_RDS_IAM === 'true') {
    const signer = new Signer({
      hostname: envs.DB_HOST,
      port: Number(envs.DB_PORT) || 5432,
      region: envs.DB_REGION,
      username: envs.DB_USERNAME,
    });
    // getAuthToken() returns a promise that resolves to the token string
    // (API may differ by sdk version; adjust if needed)
    // @ts-ignore
    const token = await signer.getAuthToken();
    cfg.password = token;
    // For IAM auth, Postgres requires `ssl: { rejectUnauthorized: false }` for some setups;
    // ensure your dialectOptions are correct per your infra
    // cfg.dialectOptions = { ssl: { rejectUnauthorized: true } };
  }

  return cfg;
}
