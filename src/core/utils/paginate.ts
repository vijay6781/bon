import { Pagination, PaginationOptions } from '../dto/common.dto';

export const paginate = (pagination: Pagination) => {
  const paginationOptions: PaginationOptions = {};

  if (pagination && pagination.page && pagination.pageSize) {
    paginationOptions.limit = pagination.pageSize;
    paginationOptions.offset = (pagination.page - 1) * pagination.pageSize;
  }

  return paginationOptions;
};
