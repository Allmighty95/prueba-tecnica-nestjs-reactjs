import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './students/entities/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/*/.entity{.ts,.js}', Student],
      synchronize: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    StudentsModule,
  ],
})
export class AppModule {}
