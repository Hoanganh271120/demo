import { Injectable } from '@nestjs/common';
import { User } from './user.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {
  }
  public async createUser(user: User) {
    console.log("user", user);
    
    return this.userRepo.save(user);
  }

  public async getAllUser(): Promise<User[]> {
    return this.userRepo.find()
  }
}
