import { Model } from 'sequelize';
import { Injectable } from '@nestjs/common';
import { User } from '../core/database/models/users.models';
import { UserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    async createUSer(userDTO: UserDTO): Promise<Model<any, any>> {
    return User.create(userDTO);
    }
}
