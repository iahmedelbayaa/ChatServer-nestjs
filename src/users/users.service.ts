import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  create(createUserDto: CreateUserDto) : Promise<UserEntity>{
    return this.userRepository.save(createUserDto);
  }

  findAll() : Promise<UserEntity[]>{
    return this.userRepository.find();
  }

  findOne(userName: string) : Promise<UserEntity>{
    return this.userRepository.findOne({where :{username: userName}});
  }

  update(id: number, updateUserDto: UpdateUserDto){
      return this.userRepository.update(id, updateUserDto);
    }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
