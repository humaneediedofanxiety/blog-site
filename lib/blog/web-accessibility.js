import { sampleAuthor } from "./author";
export const thirdPost = {
  title: "Building Accessible Web Applications",
  slug: "building-accessible-web-applications",
  excerpt:
    "Why accessibility matters and how to implement it in your projects.",
  date: "2025-03-15",
  readingTime: 10,
  author: sampleAuthor,
  coverImage: "/placeholder.svg?height=450&width=800",
  content: (
    <>
      <p>
        Web accessibility is not just a nice-to-have feature—it's a necessity.
        By building accessible web applications, you ensure that your content
        can be used by everyone, regardless of their abilities or disabilities.
      </p>
      <p>
        In this post, we'll explore why accessibility matters and how you can
        implement it in your projects.
      </p>
      <h3>Why Accessibility Matters</h3>
      <p>
        Accessibility is about creating an inclusive web that can be used by
        everyone. This includes people with visual, auditory, motor, or
        cognitive disabilities. By making your web applications accessible, you:
      </p>
      <ul>
        <li>Reach a wider audience</li>
        <li>Improve SEO</li>
        <li>Enhance usability for all users</li>
        <li>Comply with legal requirements in many jurisdictions</li>
      </ul>
      <h3>Implementing Accessibility</h3>
      <p>
        Here are some key practices for building accessible web applications:
      </p>
      <ul>
        <li>Use semantic HTML elements</li>
        <li>Provide alternative text for images</li>
        <li>Ensure keyboard navigability</li>
        <li>Maintain sufficient color contrast</li>
        <li>Use ARIA attributes when necessary</li>
      </ul>
      <p>
        By incorporating these practices into your development workflow, you can
        create web applications that are accessible to everyone, regardless of
        their abilities.
      </p>
    </>
  ),
};
