import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./User";
import { Product } from "./Product";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, (user) => user.cart, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    user!: User;

    @ManyToOne(() => Product, (product) => product.cart, { onDelete: "CASCADE" })
    @JoinColumn({ name: "product_id" })
    product!: Product

    @Column()
    quantity!: number;
}
