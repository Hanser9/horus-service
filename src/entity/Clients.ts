import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Clients {
  @PrimaryGeneratedColumn()
  client_id!: number;

  @Column("varchar", { length: 50 })
  client_name!: string;

  @Column("date")
  create_date!: Date;

  @Column("bool")
  active!: boolean;

  @Column("varchar", { length: 200 })
  address!: string;

  @Column("varchar", { length: 10 })
  zip!: string;

  @Column("varchar", { length: 50 })
  email!: string;

  @ManyToOne(() => Users, (Users) => Users.user_id)
  user!: Users;
}
