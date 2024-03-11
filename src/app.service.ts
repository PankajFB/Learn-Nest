import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello to the world of nestjs';
  };

  getNewHello(): string {
    return 'this is my first ever written controller in the nestJS with the typescirpt';
  };
}