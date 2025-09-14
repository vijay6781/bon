import { Inject, Injectable } from '@nestjs/common';
import { MILLISECONDS, SEQUELIZE } from '../constants';
import { Sequelize } from 'sequelize';

@Injectable()
export class TransactionService {
  constructor(@Inject(SEQUELIZE) private readonly sequelize: Sequelize) {}

  async getTransaction() {
    const transaction = await this.sequelize.transaction();
    setTimeout(async () => {
      try {
        await transaction.rollback();
      } catch (error) {}
    }, MILLISECONDS.IN_MINUTE * 5);

    return transaction;
  }
}
