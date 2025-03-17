import { InputType, Field } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class CreateLessonDto {
  @IsString()
  @MinLength(4)
  @Field()
  title: string;

  @IsString()
  @MinLength(4)
  @Field()
  description: string;

  @Field()
  teacher: string;
}
