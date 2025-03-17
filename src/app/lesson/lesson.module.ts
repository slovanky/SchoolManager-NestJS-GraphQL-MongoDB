import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonResolver } from './lesson.resolver';
import { LessonRepository } from './lesson.repository';
import { Lesson, LessonSchema } from './lesson.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Lesson.name, schema: LessonSchema }]),
  ],
  providers: [LessonService, LessonResolver, LessonRepository],
  exports: [LessonService, LessonRepository],
})
export class LessonModule {
  // ...
}
