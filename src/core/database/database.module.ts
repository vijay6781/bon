// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from './database.service';
import { TransactionService } from './transaction.service';

@Module({
  imports: [ConfigModule],
  providers: [...databaseProviders, TransactionService],
  exports: [...databaseProviders, TransactionService],
})
export class DatabaseModule {}
