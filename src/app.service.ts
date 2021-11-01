import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'おはようみなさん！　今日も頑張ろう！';
  }
}
