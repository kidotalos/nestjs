import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
  Request,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  //   userが配列で帰ってくる
  findAll() {
    return this.usersService.findAll();
  }

  // これがapi的な感じ。１つの機能やけん
  @Get(':username')
  @UseGuards(AuthGuard('jwt'))
  //   userが配列で帰ってくる
  findOne(@Param('username') username: string, @Request() req: any) {
    // return req.user;
    return this.usersService.findOne(username);
  }

  @Post()
  create(@Body(ValidationPipe) createUser: CreateUserDto) {
    return this.usersService.create(createUser);
  }
}
