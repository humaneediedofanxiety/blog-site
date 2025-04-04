import { sampleAuthor } from "./author";
export const fifthPost = {
  title: "Modern CSS Techniques for Developers",
  slug: "modern-css-techniques",
  excerpt:
    "Explore the latest trends in CSS and how they can improve your web designs.",
  date: "2025-02-28",
  readingTime: 7,
  author: sampleAuthor,
  coverImage: "/placeholder.svg?height=450&width=800",
  content: (
    <>
      <p>
        CSS is continually evolving with new features and techniques that can
        help you build responsive, modern web interfaces. In this post, we
        explore some of the most impactful CSS trends.
      </p>
      <h3>CSS Grid and Flexbox</h3>
      <p>
        Learn how to leverage CSS Grid and Flexbox to create complex layouts
        with ease. These tools provide powerful options for designing responsive
        interfaces.
      </p>
      <h3>CSS Variables and Custom Properties</h3>
      <p>
        Discover how CSS variables can help you maintain consistent styling
        across your projects, making it easier to implement theme changes and
        design updates.
      </p>
    </>
  ),
};
