import UserEntity from '@entities/user.entity';

export interface IUserService {
  create(user: UserEntity, actor: string): Promise<UserEntity>
}
