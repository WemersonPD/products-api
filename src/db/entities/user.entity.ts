import { Column, Entity } from 'typeorm';
import BaseEntity from './base.entity';

@Entity('user')
export default class UserEntity extends BaseEntity {
  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  hash: string;
}
