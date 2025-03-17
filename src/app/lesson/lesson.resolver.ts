import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Resolver(() => Lesson)
export class LessonResolver {
  constructor(private readonly lessonsService: LessonService) {
    // ...
  }

  @Query(() => [Lesson], { name: 'lessons' })
  findAll() {
    return this.lessonsService.findAll();
  }

  @Query(() => Lesson, { name: 'lesson' })
  findOne(@Args('id') id: string) {
    return this.lessonsService.findById(id);
  }

  @Mutation(() => Lesson)
  createLesson(@Args('data') data: CreateLessonDto) {
    return this.lessonsService.create(data);
  }

  @Mutation(() => Lesson)
  updateLesson(@Args('data') data: UpdateLessonDto) {
    return this.lessonsService.update(data.id, data);
  }

  @Mutation(() => Lesson)
  deleteLesson(@Args('id') id: string) {
    return this.lessonsService.delete(id);
  }
}
