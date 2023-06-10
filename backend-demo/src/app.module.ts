import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { User } from './modules/user/user.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'hoanganh',
      password: 'Hoanganh@2711',
      database: 'demo',
      entities: [User],
      synchronize: true,
    }), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
