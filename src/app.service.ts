import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello to the world of nestjs';
  };

  getNewHello(): string {
    return 'just for the comment history of nestjs';
  };
}