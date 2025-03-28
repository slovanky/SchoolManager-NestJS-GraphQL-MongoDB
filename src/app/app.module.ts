import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/school'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    LessonModule,
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {
  // ...
}
