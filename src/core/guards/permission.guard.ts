import { CanActivate, ExecutionContext, mixin } from '@nestjs/common';
import { Request } from 'express';
import { ObUser, PERMISSION_MODULE, PERMISSION_TYPE } from '../interfaces/user.interface';

export const ViewerPermissionGuard = (module: PERMISSION_MODULE) => {
  class PermissionGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
      const ctx = context.switchToHttp();
      const request = ctx.getRequest<Request & { user: ObUser }>();

      return (
        request.user.isAdmin ||
        request.user.isSuperAdmin ||
        [PERMISSION_TYPE.VIEWER, PERMISSION_TYPE.EDITOR, PERMISSION_TYPE.APPROVER].includes(request.user.permission[module])
      );
    }
  }

  return mixin(PermissionGuard);
};

export const EditorPermissionGuard = (module: PERMISSION_MODULE) => {
  class PermissionGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
      const ctx = context.switchToHttp();
      const request = ctx.getRequest<Request & { user: ObUser }>();

      return (
        request.user.isAdmin ||
        request.user.isSuperAdmin ||
        [PERMISSION_TYPE.EDITOR, PERMISSION_TYPE.APPROVER].includes(request.user.permission[module])
      );
    }
  }

  return mixin(PermissionGuard);
};

export const ApproverPermissionGuard = (module: PERMISSION_MODULE) => {
  class PermissionGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
      const ctx = context.switchToHttp();
      const request = ctx.getRequest<Request & { user: ObUser }>();

      return request.user.isAdmin || request.user.isSuperAdmin || [PERMISSION_TYPE.APPROVER].includes(request.user.permission[module]);
    }
  }

  return mixin(PermissionGuard);
};
