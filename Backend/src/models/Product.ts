import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Cart } from "./Cart";
import { User } from "./User";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column("decimal")
  price!: number;

  @Column()
  imageUrl!: string;

  @Column()
  category!: string;

  @Column({ default: true })
  available!: boolean;

  @OneToMany(() => Cart, (cart) => cart.product)
  cart!: Cart[];

  @ManyToOne(() => User, (user) => user.products, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: User;
}
