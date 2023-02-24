import { Injectable } from '@nestjs/common';
import { usersInterface } from './Interfaces/user.interface';

@Injectable()
export class AppService {
  private users: usersInterface[] = [];

  /**
   * @description To fetch all the users
   * @returns
   */
  getUsers(): usersInterface[] {
    return this.users;
  }

  /**
   * @description To add a new user
   * @returns
   */
  addUser(userData: usersInterface): string {
    this.users.push(userData);
    return 'User Added Successfully';
  }

  /**
   * @description To remove the last user from array
   * @returns
   */
  removeUser(): string {
    if (this.users.length > 0) {
      this.users.pop();
      return 'User Removed Successfully';
    } else {
      return 'Unable to remove the user';
    }
  }
}
