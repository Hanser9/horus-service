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
import { UserRole } from "../entity/Users";
import { Users } from "../entity/Users";

registerEnumType(UserRole, {
  name: "type_user",
  description: "User Role",
});

@InputType()
class UserInput {
  @Field()
  user_name!: string;
  @Field()
  fist_name!: string;
  @Field()
  last_name!: string;
  @Field()
  active!: boolean;
  @Field((type) => UserRole)
  type_user!: UserRole;
  @Field()
  email!: string;
}

@InputType()
class UserUpdateInput {
  @Field(() => String, { nullable: true })
  user_name?: string;
  @Field(() => String, { nullable: true })
  fist_name?: string;
  @Field(() => String, { nullable: true })
  last_name?: string;
  @Field(() => Boolean, { nullable: true })
  active?: boolean;
  @Field((type) => UserRole, { nullable: true })
  type_user?: UserRole;
  @Field(() => String, { nullable: true })
  email?: string;
}

@Resolver()
export class UsersResolver {
  @Mutation(() => Users)
  async CreateUser(@Arg("variables", () => UserInput) variables: UserInput) {
    const createUser = Users.create(variables);
    return await createUser.save();
  }

  @Mutation(() => Users)
  async UpdateUser(
    @Arg("id", () => Int) id: number,
    @Arg("fields", () => UserUpdateInput) fields: UserUpdateInput
  ) {
    await Users.update(id, fields);
    const user = await Users.findOne({ where: { user_id: id } });
    return user;
  }

  // ? Requiero eliminar usuarios?
  //   @Mutation(() => Boolean)
  //   async DeleteUser(@Arg("id", () => Int) id: number) {
  //     await Users.delete(id);
  //     return true;
  //   }

  @Query(() => [Users])
  GetUsers() {
    return Users.find();
  }
}
