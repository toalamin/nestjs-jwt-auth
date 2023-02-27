import {  Controller,  Get, Post,   Body, Request, Param,   UseGuards, Query   } from '@nestjs/common';
  import {  UserService  } from './users.service';
  import {   CreateUserDto  } from './create-user.dto';
  import {   AuthGuard } from '@nestjs/passport';
  
  @Controller('regester')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @UseGuards(AuthGuard('jwt'))
    @Get('username')
    getUserByUsername(@Query() query) {
   
      console.log(query);
      return this.userService.getUserByUsername(query.username);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getUserId(@Request() req) {
     // return req;
     console.log(req.users);
    }



    @Post()
    registerUser(@Body() createUserDto: CreateUserDto) {
      return this.userService.registerUser(createUserDto);
    }
  }