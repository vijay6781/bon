import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsOptional, IsEmail } from 'class-validator';

export class UserDTO {
  @ApiProperty({
    name: 'id',
    title: 'User ID',
    example: 'f159f698-9c77-41ad-ba91-e8e7e767ac16',
    required: false,
  })
  @IsUUID()
  @IsOptional()
  id?: string;

  @ApiProperty({
    name: 'name',
    title: 'User Name',
    example: 'Vijay Kumar',
  })
  @IsString()
  name: string;

  @ApiProperty({
    name: 'email',
    title: 'Email Address',
    example: 'vijay@example.com',
  })
  @IsEmail()
  email: string;
}
