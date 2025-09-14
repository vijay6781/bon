// src/database/database.providers.ts
import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize';
import { SEQUELIZE } from '../constants';
import { initUserModel } from './models/users.models';
import { initBillModel } from './models/bills.models';
import { initRewardModel } from './models/rewards.models';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize(
        configService.get('DB_NAME') ?? '',
        configService.get('DB_USERNAME') ?? '',
        configService.get('DB_PASSWORD') ?? '',
        {
          host: configService.get('DB_HOST') ?? '',
          port: Number(configService.get('DB_PORT') ?? '5432'),
          dialect: 'postgres',
          logging: false,
        }
      );

      // Initialize models
      initUserModel(sequelize);
      initBillModel(sequelize);
      initRewardModel(sequelize);

      if ((configService.get('DB_SYNC') ?? 'false') === 'true') {
        await sequelize.sync();
      }

      return sequelize;
    },
    inject: [ConfigService],
  },
];
