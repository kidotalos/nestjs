import * as mongoose from 'mongoose';

export interface Blog extends mongoose.Document {
  blogId: number;
  blogTitle: string;
  blogContent: string;
}
