import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { JwtPayLoad } from "./jwt-payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(@InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    ) {
        super({
            secretOrKey: process.env.JWT_SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
     }

     async validate (payload : JwtPayLoad) : Promise<UserEntity>{
        const {username } = payload;
        const user : UserEntity = await this.userRepository.findOne({where :{username}})

        if (!user){
            throw new UnauthorizedException();
        }

        return user;
     }
}