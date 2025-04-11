import type React from "react";
import { sixthPost } from "./blog/take-the-leap";
import { seventhPost } from "./blog/i-cant-write";
import { eighthPost } from "./blog/can't-sleep";
import { ninthPost } from './blog/powerlifting-goals';
import { tenthPost } from './blog/learn-read';
import { eleventhPost } from './blog/feeling-lazy';
import { twelvethPost } from './blog/lonely'
import { thirteenPost } from './blog/brainfuck'

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

  thirteenPost,
  twelvethPost,
  eleventhPost,
  tenthPost,
  ninthPost,
  eighthPost,
  seventhPost,
  sixthPost,


];

