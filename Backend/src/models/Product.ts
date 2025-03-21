import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Cart } from "./Cart";

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
}
