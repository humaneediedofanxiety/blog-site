import type React from "react";
import { sixthPost } from "./blog/take-the-leap";
import { seventhPost } from "./blog/i-cant-write";
import { eighthPost } from "./blog/can't-sleep";
import { ninthPost } from './blog/powerlifting-goals';

export interface Author {
  name: string;
}

export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readingTime: number;
  author: Author;
  coverImage?: string;
  content: React.ReactNode;
}



export const blogPosts: Post[] = [
  ninthPost,
  eighthPost,
  seventhPost,
  sixthPost,


];

