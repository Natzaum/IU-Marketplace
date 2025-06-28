import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Cart } from "./Cart";
import { Product } from "./Product";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ nullable: true })
  rawPassword!: string;

  @OneToMany(() => Cart, (cart) => cart.user)
  cart!: Cart[];

  @OneToMany(() => Product, (product) => product.user)
  products!: Product[];
}
