import { CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { ApiUserService } from 'src/api/user.service';

@Injectable()
export class WbGuard implements CanActivate {
  private readonly logger = new Logger(WbGuard.name);

  constructor(private readonly apiUserService: ApiUserService) {}

  async canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request & { user: any; customer: any }>();

    if (request.headers.authorization) {
      try {
        const user = await this.apiUserService.verifyWbToken(request.headers.authorization);

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
