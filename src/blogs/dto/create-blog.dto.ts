import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateBlogDto {
  @IsString()
  readonly blogId: number;
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  readonly blogTitle: string;
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  readonly blogContent: string;
}
