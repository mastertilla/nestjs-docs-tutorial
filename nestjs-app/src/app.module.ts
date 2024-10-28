import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
      PostsModule,
      ConfigModule.forRoot({
        validationSchema: Joi.object({
            DB_HOST: Joi.string().required(),
            DB_PORT: Joi.number().required(),
            DB_USERNAME: Joi.string().required(),
            DB_PASSWORD: Joi.string().required(),
            DB_NAME: Joi.string().required(),
            DB_SSL_CA: Joi.string().required(),
            PORT: Joi.number()
        })
      }),
      DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
