import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import * as compression from 'compression';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';
import { Request, Response, NextFunction, json } from 'express';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('RequestLogger');

  const apiPrefix = '/bn/v1';

  app.setGlobalPrefix(apiPrefix);
  app.use(helmet());
  app.use(json({ limit: '50mb' }));
  app.use(compression());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Execution Service')
    .setDescription('This API documentation is for Execution Service.')
    .setVersion('1.0')
    .addBearerAuth(
      {
        description: `Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'JWT',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
      },
      'accessToken',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${apiPrefix}/swagger`, app, document);

  app.useGlobalPipes(new ValidateInputPipe({ whitelist: false }));

  app.use((req: Request, res: Response, next: NextFunction) => {
    const skip = req.method === 'OPTIONS' || ['/', '/metrics', `${apiPrefix}/healthcheck`].includes(req.path);

    if (!skip) {
      logger.log(JSON.stringify({ path: req.path, params: req.params, query: req.query, body: req.body, headers: req.headers, method: req.method }));
    }

    next();
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
