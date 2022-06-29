import {
  Resolver,
  Query,
  Mutation,
  Arg,
  registerEnumType,
  InputType,
  Field,
  Int,
} from "type-graphql";
import { Users } from "../entity/Users";
import { CreateUser, GetUsers, UpdateUser } from "../services/users/Users";

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  ROOT = "ROOT",
}

registerEnumType(UserRole, {
  name: "type_user",
  description: "User Role",
});

@InputType()
export class UserInput {
  @Field()
  user_name!: string;
  @Field()
  first_name!: string;
  @Field()
  last_name!: string;
  @Field()
  active!: boolean;
  @Field((type) => UserRole)
  user_type!: UserRole;
  @Field()
  email!: string;
  @Field()
  pass!: string;
}

@InputType()
export class UserUpdateInput {
  @Field(() => String, { nullable: true })
  user_name?: string;
  @Field(() => String, { nullable: true })
  first_name?: string;
  @Field(() => String, { nullable: true })
  last_name?: string;
  @Field(() => Boolean, { nullable: true })
  active?: boolean;
  @Field((type) => UserRole, { nullable: true })
  user_type?: UserRole;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  pass?: string;
}

@Resolver()
export class UsersResolver {
  @Mutation(() => Users)
  async CreateUser(@Arg("variables", () => UserInput) variables: UserInput) {
    const user = await CreateUser(variables);
    return user;
  }

  @Mutation(() => Users)
  async UpdateUser(
    @Arg("id", () => Int) id: number,
    @Arg("fields", () => UserUpdateInput) fields: UserUpdateInput
  ) {
    const user = await UpdateUser(id, fields);
    return user;
  }

  // ? Requiero eliminar usuarios?
  //   @Mutation(() => Boolean)
  //   async DeleteUser(@Arg("id", () => Int) id: number) {
  //     await Users.delete(id);
  //     return true;
  //   }

  @Query(() => [Users])
  async GetUsers() {
    return await GetUsers();
  }
}
