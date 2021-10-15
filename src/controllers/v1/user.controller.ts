import { inject } from 'inversify';
import { interfaces, httpPost, request, response, controller } from 'inversify-express-utils';
import express from 'express';

import TYPES from '../../types';
import { IUserService } from '@services/interfaces/iuser.service';
import UserEntity from '@entities/user.entity';

@controller('/users')
export class UserController implements interfaces.Controller {
  constructor(
    @inject(TYPES.UserService)
    private userService: IUserService
  ) {
    // super();
  }

  @httpPost('/')
  private async create(@request() req: express.Request, @response() res: express.Response) {
    try {
      const user = await this.userService.create(req.body as UserEntity, 'SYSTEM');
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
