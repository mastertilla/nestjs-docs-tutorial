import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('POSTGRES_URL'),
        ssl: {
            rejectUnauthorized: false, // Ignore SSL errors (not recommended for production)
          },
        entities: [
          __dirname + '/../**/*.entity.ts',
        ],
        synchronize: true,
      })
    }),
  ],
})
export class DatabaseModule {}