import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import moment from 'moment';

export class Pagination {
  @ApiProperty({
    name: 'page',
    title: 'Page',
    example: 1,
  })
  page: number;

  @ApiProperty({
    name: 'pageSize',
    title: 'PageSize',
    example: 10,
  })
  pageSize: number;
}

export class PaginationOptions {
  limit?: number;
  offset?: number;
}

export class DateFilter {
  @ApiProperty({
    name: 'from',
    title: 'From',
    example: moment().toISOString(),
    required: false,
  })
  from?: Date;

  @ApiProperty({
    name: 'to',
    title: 'To',
    example: moment().add(1, 'w').toISOString(),
    required: false,
  })
  to?: Date;
}

export class PaginatedDateFilter extends IntersectionType(Pagination, DateFilter) {}
