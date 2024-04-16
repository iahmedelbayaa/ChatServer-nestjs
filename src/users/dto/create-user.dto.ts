import {  IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";


export class CreateUserDto {

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    readonly username: string;

    @IsEmail()
    readonly email: string;

    @MinLength(8)
    @IsString()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password is too weak',
    })
    readonly password: string;
}
