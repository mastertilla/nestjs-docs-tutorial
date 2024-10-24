import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { readFileSync } from 'fs';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load .env file and make it globally available
    PostsModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
        ssl: {
            rejectUnauthorized: true,
            ca: readFileSync(configService.get<string>('DB_SSL_CA')).toString(),
        }
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
