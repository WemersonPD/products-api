import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotEnv from 'dotenv';
import morgan from 'morgan';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

import TYPES from './types';
import { initializeDatabase } from './db/database';

// Controllers
// import '@controllers/product.controller';
import '@controllers/index';

// Services
import { ProductService } from '@services/products.service';
import { UserService } from '@services/user.service';

// Repositories
import { UserRepository } from '@repositories/user.repository';

// Interfaces
import { IProductService } from './services/interfaces/Iproduct.service';
import { IUserRepository } from '@repositories/interfaces/iuser.repository';
import { IUserService } from '@services/interfaces/iuser.service';

import { getRepository } from 'typeorm';
import UserEntity from '@entities/user.entity';

export class App {
  private container: Container;

  public server: InversifyExpressServer;

  constructor() {
    dotEnv.config({
      path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.development'
    });

    this.container = new Container();

    this.container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository);
    this.container.bind<IUserService>(TYPES.UserService).to(UserService);

    this.container.bind<IProductService>(TYPES.ProductService).to(ProductService);

    this.configbuildServer(this.container);
  }

  configbuildServer(container: any): void {
    this.server = new InversifyExpressServer(container, null, { rootPath: '/api/v1' });

    this.server.setConfig(async(app: express.Express) => {
      app.use(express.json());
      app.use(cors());
      app.use(morgan('dev'));

      await initializeDatabase();

      const userRepository = getRepository(UserEntity);
      console.log(userRepository.find());
    });
  }
}

export default new App().server.build();
