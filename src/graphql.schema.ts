
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserInput {
    firstName?: string;
    lastName?: string;
    email?: string;
    age?: number;
}

export class User {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    age: number;
}

export abstract class IMutation {
    abstract createUser(user?: CreateUserInput): User | Promise<User>;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): User | Promise<User>;
}

export abstract class ISubscription {
    abstract userCreated(): User | Promise<User>;
}
