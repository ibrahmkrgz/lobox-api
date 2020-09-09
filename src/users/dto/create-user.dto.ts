import { CreateUserInput } from '../../graphql.schema';

export class CreateUserDto extends CreateUserInput {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}
