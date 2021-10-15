import { inject, injectable } from 'inversify';

import userEntity from '@entities/user.entity';
import { IUserRepository } from '@repositories/interfaces/iuser.repository';
import { IUserService } from './interfaces/iuser.service';
import TYPES from '../types';

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(TYPES.UserRepository)
    private userRepository: IUserRepository
  ) {}

  async create(user: userEntity, actor: string): Promise<userEntity> {
    user.createdBy = actor;
    return await this.userRepository.create(user);
  }
}
