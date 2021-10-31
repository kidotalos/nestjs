import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

// @以下のものをデコレーターという
@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://kidotalos:takuya1993@cluster0.wcth2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

// 本質はこのクラス
export class AppModule {}
