import type React from "react";
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

const sampleAuthor: Author = {
  name: "Mahmudul Hasan",
  avatar: "/stalin.png",
};

export const blogPosts: Post[] = [
  {
    title: "The Future of Web Development is Server Components",
    slug: "future-of-web-development",
    excerpt: "How React Server Components are changing the way we build web applications.",
    date: "2025-04-01",
    readingTime: 8,
    author: sampleAuthor,
    coverImage: "/placeholder.svg?height=450&width=800",
    content: (
      <>
        <p>
          React Server Components represent a paradigm shift in how we build web applications. By moving component
          rendering to the server, we can deliver faster initial page loads and reduce the JavaScript bundle size sent
          to the client.
        </p>
        <p>
          This approach allows developers to access server-side resources directly from their components, without the
          need for a separate API layer. Database queries, file system access, and other server-only operations can now
          be performed directly within your React components.
        </p>
        <h3>Key Benefits of Server Components</h3>
        <ul>
          <li>Reduced client-side JavaScript</li>
          <li>Improved initial page load performance</li>
          <li>Direct access to server-side resources</li>
          <li>Better SEO out of the box</li>
        </ul>
        <p>
          While Server Components are still evolving, they represent an exciting direction for the future of web
          development. By combining the best aspects of server-side rendering with the component model that developers
          love, React is once again pushing the boundaries of what's possible on the web.
        </p>
      </>
    ),
  },
  {
    title: "Mastering TypeScript: Advanced Type Techniques",
    slug: "mastering-typescript",
    excerpt: "Level up your TypeScript skills with these advanced type techniques.",
    date: "2025-03-25",
    readingTime: 12,
    author: sampleAuthor,
    coverImage: "/placeholder.svg?height=450&width=800",
    content: (
      <>
        <p>
          TypeScript has become the standard for building large-scale JavaScript applications. Its type system allows
          developers to catch errors at compile time rather than runtime, leading to more robust code and better
          developer experience.
        </p>
        <p>
          In this post, we'll explore some advanced TypeScript techniques that can help you write more expressive and
          type-safe code.
        </p>
        <h3>Conditional Types</h3>
        <p>
          Conditional types allow you to create types that depend on other types. This is similar to using if statements
          in your type definitions.
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
        <p>Mapped types allow you to transform the properties of an existing type into a new type.</p>
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
          By mastering these advanced TypeScript features, you'll be able to create more expressive and type-safe code,
          leading to fewer bugs and a better developer experience.
        </p>
      </>
    ),
  },
  {
    title: "Building Accessible Web Applications",
    slug: "building-accessible-web-applications",
    excerpt: "Why accessibility matters and how to implement it in your projects.",
    date: "2025-03-15",
    readingTime: 10,
    author: sampleAuthor,
    coverImage: "/placeholder.svg?height=450&width=800",
    content: (
      <>
        <p>
          Web accessibility is not just a nice-to-have feature—it's a necessity. By building accessible web
          applications, you ensure that your content can be used by everyone, regardless of their abilities or
          disabilities.
        </p>
        <p>In this post, we'll explore why accessibility matters and how you can implement it in your projects.</p>
        <h3>Why Accessibility Matters</h3>
        <p>
          Accessibility is about creating an inclusive web that can be used by everyone. This includes people with
          visual, auditory, motor, or cognitive disabilities. By making your web applications accessible, you:
        </p>
        <ul>
          <li>Reach a wider audience</li>
          <li>Improve SEO</li>
          <li>Enhance usability for all users</li>
          <li>Comply with legal requirements in many jurisdictions</li>
        </ul>
        <h3>Implementing Accessibility</h3>
        <p>Here are some key practices for building accessible web applications:</p>
        <ul>
          <li>Use semantic HTML elements</li>
          <li>Provide alternative text for images</li>
          <li>Ensure keyboard navigability</li>
          <li>Maintain sufficient color contrast</li>
          <li>Use ARIA attributes when necessary</li>
        </ul>
        <p>
          By incorporating these practices into your development workflow, you can create web applications that are
          accessible to everyone, regardless of their abilities.
        </p>
      </>
    ),
  },
  {
    title: "Understanding React Hooks: A Comprehensive Guide",
    slug: "understanding-react-hooks",
    excerpt: "Dive deep into the world of React Hooks and learn how they can simplify your code.",
    date: "2025-03-05",
    readingTime: 9,
    author: sampleAuthor,
    coverImage: "/placeholder.svg?height=450&width=800",
    content: (
      <>
        <p>
          React Hooks have revolutionized how we write React components by enabling state and side effects without
          using classes. They simplify state management and make your components more reusable.
        </p>
        <h3>Why Hooks?</h3>
        <p>
          Hooks allow you to separate logic from presentation and share stateful logic between components. This leads to
          cleaner, more maintainable code.
        </p>
        <p>
          In this guide, you'll learn about core hooks like <code>useState</code> and <code>useEffect</code>, along with
          tips on creating your own custom hooks to encapsulate common functionality.
        </p>
      </>
    ),
  },
  {
    title: "Modern CSS Techniques for Developers",
    slug: "modern-css-techniques",
    excerpt: "Explore the latest trends in CSS and how they can improve your web designs.",
    date: "2025-02-28",
    readingTime: 7,
    author: sampleAuthor,
    coverImage: "/placeholder.svg?height=450&width=800",
    content: (
      <>
        <p>
          CSS is continually evolving with new features and techniques that can help you build responsive, modern web
          interfaces. In this post, we explore some of the most impactful CSS trends.
        </p>
        <h3>CSS Grid and Flexbox</h3>
        <p>
          Learn how to leverage CSS Grid and Flexbox to create complex layouts with ease. These tools provide powerful
          options for designing responsive interfaces.
        </p>
        <h3>CSS Variables and Custom Properties</h3>
        <p>
          Discover how CSS variables can help you maintain consistent styling across your projects, making it easier to
          implement theme changes and design updates.
        </p>
      </>
    ),
  },
];

