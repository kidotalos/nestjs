import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  blogId: {
    type: Number,
    required: true,
    index: { unique: true },
  },
  blogTitle: {
    type: String,
    required: true,
    index: { unique: true },
  },
  blogContent: {
    type: String,
    required: true,
  },
});
