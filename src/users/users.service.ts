import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(address: string) {
    return this.userModel.findOne({ address });
  }

  async create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);

    return user.save();
  }
}
