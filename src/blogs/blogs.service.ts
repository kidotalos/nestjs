import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog } from './interfaces/blog.interface';

@Injectable()
export class BlogsService {
  constructor(@InjectModel('Blog') private readonly blogModel: Model<Blog>) {}
  blogs: CreateBlogDto[] = [];
  async create(blog: CreateBlogDto) {
    const createdBlog = new this.blogModel({
      blogId: blog.blogId,
      blogTitle: blog.blogTitle,
      blogContent: blog.blogContent,
    });
    return await createdBlog.save();
  }
  async findAll() {
    return await this.blogModel.find().exec();
  }
  async findOne(blogId: number) {
    const blog = await this.blogModel.findOne({ blogId });
    return blog;
  }
}
