import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(address: string) {
    const user = await this.usersService.findOne(address);
    if (!user && this.configService.get('admins').includes(address)) {
      return await this.usersService.create({ address });
    }
    return user || null;
  }

  async login(address: string) {
    return this.jwtService.sign({ address });
  }
}
