import { Injectable } from '@nestjs/common';
import { User } from '../graphql.schema';

@Injectable()
export class UsersService {
  private readonly users: User[] = [{ id: 1, firstName: 'lobox', lastName: 'Developer', email: 'dev@lobox.dev', age: 1 }];

  create(user: User): User {
    user.id = this.users.length + 1;
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOneById(id: number): User {
    return this.users.find(user => user.id === id);
  }
}
