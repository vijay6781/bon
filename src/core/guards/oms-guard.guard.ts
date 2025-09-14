import { CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { ApiUserService } from 'src/api/user.service';

@Injectable()
export class OmsGuard implements CanActivate {
  private readonly logger = new Logger(OmsGuard.name);

  constructor(private apiUserService: ApiUserService) {}

  async canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request & { user: any }>();

    if (request.headers.authorization) {
      try {
        const user = await this.apiUserService.verifyOmsToken(request.headers.authorization);

        if (user) {
          request.user = user;
          return true;
        }

        throw new UnauthorizedException();
      } catch (e) {
        this.logger.error(e);
        throw new UnauthorizedException();
      }
    }

    throw new UnauthorizedException();
  }
}
