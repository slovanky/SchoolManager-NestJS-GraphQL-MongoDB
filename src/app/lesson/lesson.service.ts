import { Injectable } from '@nestjs/common';
import { LessonRepository } from './lesson.repository';
import { Lesson } from './lesson.entity';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Injectable()
export class LessonService {
  constructor(private readonly lessonsRepository: LessonRepository) {
    // ...
  }

  async findAll(): Promise<Lesson[]> {
    return this.lessonsRepository.findAll();
  }

  async findById(id: string): Promise<Lesson | null> {
    return this.lessonsRepository.findById(id);
  }

  async create(data: CreateLessonDto): Promise<Lesson> {
    return this.lessonsRepository.create(data);
  }

  async update(id: string, data: Partial<Lesson>): Promise<Lesson | null> {
    return this.lessonsRepository.update(id, data);
  }

  async delete(id: string): Promise<Lesson | null> {
    return this.lessonsRepository.delete(id);
  }
}
