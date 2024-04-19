import { UserEntity } from "src/users/entities/user.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Chat {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    message: string;

    @Column()
    user: UserEntity;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

}
