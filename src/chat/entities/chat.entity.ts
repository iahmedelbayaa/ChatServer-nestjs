import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Chat {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    members: Array<string>;

    @Column()
    createdAt: Date;


}
