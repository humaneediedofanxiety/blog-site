import { sampleAuthor } from "./author";
export const secondPost = {
  title: "Mastering TypeScript: Advanced Type Techniques",
  slug: "mastering-typescript",
  excerpt:
    "Level up your TypeScript skills with these advanced type techniques.",
  date: "2025-03-25",
  readingTime: 12,
  author: sampleAuthor,
  coverImage: "/placeholder.svg?height=450&width=800",
  content: (
    <>
      <p>
        TypeScript has become the standard for building large-scale JavaScript
        applications. Its type system allows developers to catch errors at
        compile time rather than runtime, leading to more robust code and better
        developer experience.
      </p>
      <p>
        In this post, we'll explore some advanced TypeScript techniques that can
        help you write more expressive and type-safe code.
      </p>
      <h3>Conditional Types</h3>
      <p>
        Conditional types allow you to create types that depend on other types.
        This is similar to using if statements in your type definitions.
      </p>
      <pre>
        <code>
          {`type IsArray<T> = T extends any[] ? true : false;

// Usage
type Result1 = IsArray<number[]>; // true
type Result2 = IsArray<string>; // false`}
        </code>
      </pre>
      <h3>Mapped Types</h3>
      <p>
        Mapped types allow you to transform the properties of an existing type
        into a new type.
      </p>
      <pre>
        <code>
          {`type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Usage
interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
// Equivalent to:
// {
//   readonly name: string;
//   readonly age: number;
// }`}
        </code>
      </pre>
      <p>
        By mastering these advanced TypeScript features, you'll be able to
        create more expressive and type-safe code, leading to fewer bugs and a
        better developer experience.
      </p>
    </>
  ),
};
