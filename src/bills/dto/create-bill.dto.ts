import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class BillDTO {
  @ApiProperty({
    name: 'id',
    title: 'Bill ID',
    example: 'f159f698-9c77-41ad-ba91-e8e7e767ac16',
  })
  @IsUUID()
  @IsOptional()
  id: string;

  @ApiProperty({
    name: 'user_id',
    title: 'User ID',
    example: 'f159f698-9c77-41ad-ba91-e8e7e767ac18',
  })
  @IsUUID()
  @IsOptional()
  userId?: string;

  @ApiProperty({
    name: 'amount',
    title: 'Bill Amount',
    example: 150.5,
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    name: 'due_date',
    title: 'Due Date',
    example: '2025-09-01',
  })
  @IsDateString()
  @IsOptional()
  dueDate: string;

  @ApiProperty({
    name: 'payment_date',
    title: 'Payment Date',
    example: '2025-09-01T10:00:00Z',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  paymentDate?: string | null;
}
