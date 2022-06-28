import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  ROOT = "ROOT",
}

@ObjectType()
@Entity()
export class Users extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  user_id!: number;

  @Field()
  @Column("varchar", { length: 20 })
  user_name!: string;

  @Field()
  @Column("varchar", { length: 20 })
  fist_name!: string;

  @Field()
  @Column("varchar", { length: 20 })
  last_name!: string;

  @Field(() => String)
  @CreateDateColumn()
  create_date!: Date;

  @Field()
  @Column("bool")
  active!: boolean;

  @Field()
  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  user_type!: UserRole;

  @Field()
  @Column("varchar", { length: 50 })
  email!: string;

  @Field()
  @Column("varchar", { length: 50 })
  pass!: string;
}
