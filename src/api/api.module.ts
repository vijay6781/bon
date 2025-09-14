import { Module } from '@nestjs/common';
import { ApiUserService } from './user.service';
import { ApiController } from './api.controller';
@Module({
  exports: [ApiUserService],
  controllers: [ApiController],
  providers: [ApiUserService],
})
export class ApiModule {}
