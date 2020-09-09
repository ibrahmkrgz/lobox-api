import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { User } from '../graphql.schema';
import { UsersGuard } from './users.guard';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

const pubSub = new PubSub();

@Resolver('User')
export class UsersResolvers {
  constructor(private readonly usersService: UsersService) {}

  @Query()
  @UseGuards(UsersGuard)
  async users() {
    return this.usersService.findAll();
  }

  @Query('user')
  async findOneById(
    @Args('id', ParseIntPipe)
      id: number,
  ): Promise<User> {
    return this.usersService.findOneById(id);
  }

  @Mutation('createUser')
  async create(@Args('user') args: CreateUserDto): Promise<User> {
    const createdUser = await this.usersService.create(args);
    pubSub.publish('userCreated', { userCreated: createdUser });
    return createdUser;
  }

  @Subscription('userCreated')
  userCreated() {
    return pubSub.asyncIterator('userCreated');
  }
}
