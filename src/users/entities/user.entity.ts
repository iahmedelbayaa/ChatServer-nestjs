import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    
    @Column()
    username: string;
    
    @Column({unique: true})
    email: string;
    
    @Column()
    password: string;
}
