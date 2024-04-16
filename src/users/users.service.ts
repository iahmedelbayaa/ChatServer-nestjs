import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) : Promise<User>{
    return this.userRepository.save(createUserDto);
  }

  findAll() : Promise<User[]>{
    return this.userRepository.find();
  }

  findOne(userName: string) : Promise<User>{
    return this.userRepository.findOne({where :{username: userName}});
  }

  update(id: number, updateUserDto: UpdateUserDto){
      return this.userRepository.update(id, updateUserDto);
    }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
