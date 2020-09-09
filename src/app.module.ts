import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      context: ({ req }) => {
        return { req} ;
      },
      cors: {
        credentials: true,
        origin: true,
      },
    }),
  ],
})
export class AppModule {}
