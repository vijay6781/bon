import { Injectable, ArgumentMetadata, BadRequestException, ValidationPipe, UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
  public async transform(value: any, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (e) {
      if (e instanceof BadRequestException) {
        throw new UnprocessableEntityException(this.handleError(e.getResponse()));
      } else {
        throw e;
      }
    }
  }

  private handleError(errors: any) {
    return errors?.map?.((error: any) => error.constraints) || errors?.message?.join?.(', ') || errors;
  }
}
