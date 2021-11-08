import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogService: BlogsService) {}
  @Get()
  findAll() {
    return this.blogService.findAll();
  }
  @Post()
  create(@Body(ValidationPipe) createBlog: CreateBlogDto) {
    return this.blogService.create(createBlog);
  }
}
