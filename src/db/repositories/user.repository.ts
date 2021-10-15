import { injectable } from 'inversify';
import { getRepository, Repository } from 'typeorm';

import UserEntity from '@entities/user.entity';
import { IUserRepository } from './interfaces/iuser.repository';

@injectable()
export class UserRepository implements IUserRepository {
  private userRepository: Repository<UserEntity>

  constructor() {
    this.userRepository = getRepository(UserEntity);
  }

  async create(user: UserEntity): Promise<UserEntity> {
    return await this.userRepository.save(user);
  }
}
