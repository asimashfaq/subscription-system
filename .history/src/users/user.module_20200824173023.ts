import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from 'services/User/user.service';

@Module({
  controllers: [UserController],
  providers: [UserController],
  exports: [],
})
export class UserModule {}
