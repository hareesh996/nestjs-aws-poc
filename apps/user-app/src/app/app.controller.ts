import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { userInfo } from 'os';

import { AppService } from './app.service';

@Controller("user-controller")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("init")
  getData() {
    return this.appService.getData();
  }

  @Get("users/:userid")
  getUsers(@Param("userid") userId: string, @Query("accountName") accountName: string): Promise<{ userId: string, accountName: string }>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          userId,
          accountName
        })
      }, 200)
    })
  }

  @Post("users")
  createUser(@Body() user: any): Promise<any>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(user)
      }, 200)
    })
  }

  @Put("users/:userid")
  updateUser(@Param("userid") userId:string, @Body() user: any): Promise<any>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          user,
          userId
        })
      }, 200)
    })
  }

}
