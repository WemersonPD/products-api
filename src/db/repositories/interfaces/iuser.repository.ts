import UserEntity from '@entities/user.entity';

export interface IUserRepository {
  create(user: UserEntity): Promise<UserEntity>
}
