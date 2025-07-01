import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Ingrediente } from './ingredientes/entities/ingrediente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'aZdq34#$hjF',
      database: 'rolesdb',
      entities: [User, Ingrediente],
      synchronize: true, 
    }),
    UsersModule,
    AuthModule,
    IngredientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
