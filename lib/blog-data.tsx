import type React from "react";
import { firstPost } from "./blog/future-of-web-dev";
import { secondPost } from "./blog/typescript-features";
import { thirdPost } from "./blog/web-accessibility";
import { fourthPost } from "./blog/react-hooks";
import { fifthPost } from "./blog/css-tips";

export interface Author {
  name: string;
  avatar: string;
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
  firstPost,
  secondPost,
  thirdPost,
  fourthPost,
  fifthPost,
];

