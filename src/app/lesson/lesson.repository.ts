import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson } from './lesson.entity';

@Injectable()
export class LessonRepository {
  constructor(
    @InjectModel(Lesson.name)
    private lessonModel: Model<Lesson>,
  ) {
    // ...
  }

  async create(data: Partial<Lesson>): Promise<Lesson> {
    return this.lessonModel.create(data);
  }

  async findAll(): Promise<Lesson[]> {
    return this.lessonModel.find().exec();
  }

  async findById(id: string): Promise<Lesson | null> {
    return this.lessonModel.findById(id).exec();
  }

  async update(
    id: string,
    updateData: Partial<Lesson>,
  ): Promise<Lesson | null> {
    return this.lessonModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Lesson | null> {
    return this.lessonModel.findByIdAndDelete(id).exec();
  }
}
