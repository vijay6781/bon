import { UsersService } from './users.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiBy } from 'src/core/decorators/api-user.decorator';
import { ApiEpUser } from 'src/core/interfaces/user.interface';
import { Body, Post } from '@nestjs/common';
import { UserDTO } from './dto/create-user.dto';

@ApiTags('Users')

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService ) {}
      @Post('user/create')
      createUSer(@Body() userDTO: UserDTO) {
        return this.UsersService.createUSer( userDTO );
      }
   
}
