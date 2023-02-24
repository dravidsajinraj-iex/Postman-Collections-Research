import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

import { createUserDto } from './dto/user.dto';
import { usersInterface } from './Interfaces/user.interface';

@Controller('App')
@ApiTags('App Module')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @ApiOperation({ summary: 'To add a new user to an array' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Successfully Added' })
  addUsers(@Body() userData: createUserDto): string {
    return this.appService.addUser(userData);
  }

  @Get()
  @ApiOperation({ summary: 'Get Random User Array' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Successfully Returned' })
  getUsers(): usersInterface[] {
    return this.appService.getUsers();
  }

  @Delete()
  @ApiOperation({ summary: 'Remove last element from an array' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Successfully Removed' })
  removeUsers(): string {
    return this.appService.removeUser();
  }
}
