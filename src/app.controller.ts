import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// どんなURLがきたらどのような処理をかえすか
@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // インスタンス線でもconstructorあるけん大丈夫的な
    return this.appService.getHello();
  }
}
