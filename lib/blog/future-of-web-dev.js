import { sampleAuthor } from "./author";

export const firstPost = {
  title: "The Future of Web Development is Server Components",
  slug: "future-of-web-development",
  excerpt:
    "How React Server Components are changing the way we build web applications.",
  date: "2025-04-01",
  readingTime: 8,
  author: sampleAuthor,
  coverImage: "/web-development.png?height=450&width=800",
  content: (
    <>
      <p>
        React Server Components represent a paradigm shift in how we build web
        applications.By moving component rendering to the server, we can deliver
        faster initial page loads and reduce the JavaScript bundle size sent to
        the client.
      </p>
      <p>
        This approach allows developers to access server- side resources
        directly from their components, without the need for a separate API
        layer. Database queries, file system access, and other server - only
        operations can now be performed directly within your React components.
      </p>
      <h3> Key Benefits of Server Components </h3>
      <ul>
        <li>Reduced client - side JavaScript </li>
        <li> Improved initial page load performance </li>
        <li> Direct access to server - side resources </li>
        <li> Better SEO out of the box </li>
      </ul>
      <p>
        While Server Components are still evolving, they represent an exciting
        direction for the future of web development.By combining the best
        aspects of server - side rendering with the component model that
        developers love, React is once again pushing the boundaries of what's
        possible on the web.
      </p>
    </>
  ),
};
