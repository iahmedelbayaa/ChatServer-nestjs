import { UserEntity } from "src/users/entities/user.entity";

export class CreateChatDto {
    id : number;
    message: string;
    user: UserEntity;
    createdAt: Date;
    updatedAt: Date;
}
