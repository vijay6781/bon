import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ApiUser = createParamDecorator((data: string, context: ExecutionContext) => {
  return context.switchToHttp().getRequest().user;
});

export const ApiBy = createParamDecorator((data: string, context: ExecutionContext) => {
  const user = context.switchToHttp().getRequest().user;
  if (user) {
    return { id: user?.id, name: user?.name ,accountId: user?.accountId};
  }

  return undefined;
});
