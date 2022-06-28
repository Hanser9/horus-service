import { Users } from "../../entity/Users";
import { UserInput, UserUpdateInput } from "../../resolvers/UsersResolver";

export const CreateUser = async (variables: UserInput) => {
  //TODO encrypt password
  const createUser = Users.create(variables);
  return await createUser.save();
};

export const UpdateUser = async (id: number, fields: UserUpdateInput) => {
  await Users.update(id, fields);
  const user = await Users.findOne({ where: { user_id: id } });
  return user;
};

export const GetUsers = async () => {
  return await Users.find();
};
