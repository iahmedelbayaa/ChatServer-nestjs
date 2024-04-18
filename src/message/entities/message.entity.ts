import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('message')
export class Message {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    ChatId: string;

    @Column()
    senderId: string;

    @Column()
    text: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column()
    deletedAt: Date;

}
