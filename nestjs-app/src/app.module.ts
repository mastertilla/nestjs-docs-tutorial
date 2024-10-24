import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PostsModule,
    ConfigModule.forRoot({
        validationSchema: Joi.object({
            POSTGRES_URL: Joi.string().required(),
            POSTGRES_DB: Joi.string().required(),
            PORT: Joi.number()
        })
    }),
  DatabaseModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
