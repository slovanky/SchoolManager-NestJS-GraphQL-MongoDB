import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class Lesson extends Document {
  @Field(() => ID)
  declare _id: string;

  @Field()
  @Prop({ required: true })
  title: string;

  @Field()
  @Prop({ required: true })
  description: string;

  @Field(() => [String])
  @Prop({ type: [String], default: [] }) // Example: studentIds
  students: string[];

  @Field()
  @Prop({ required: true })
  teacher: string;

  @Field()
  @Prop({ default: Date.now })
  createdAt: Date;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
