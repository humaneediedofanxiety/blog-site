import { BlogPost } from "@/components/blog-post"
import { blogPosts } from "@/lib/blog-data"

// This is a simplified version - in a real app, you'd have proper topic metadata
const topicMap = {
  react: {
    title: "React",
    description: "Articles about React, hooks, components, and best practices.",
    posts: ["future-of-web-development", "building-accessible-web-applications"],
  },
  typescript: {
    title: "TypeScript",
    description: "Learn about TypeScript, type safety, and advanced typing techniques.",
    posts: ["mastering-typescript", "future-of-web-development"],
  },
  nextjs: {
    title: "Next.js",
    description: "Tutorials and guides for building with Next.js framework.",
    posts: ["future-of-web-development"],
  },
  accessibility: {
    title: "Accessibility",
    description: "Making the web accessible to everyone.",
    posts: ["building-accessible-web-applications"],
  },
  performance: {
    title: "Performance",
    description: "Optimizing web applications for speed and efficiency.",
    posts: ["future-of-web-development"],
  },
  javascript: {
    title: "JavaScript",
    description: "Core JavaScript concepts, patterns, and techniques.",
    posts: ["mastering-typescript", "future-of-web-development"],
  },
  "web-development": {
    title: "Web Development",
    description: "General web development topics and best practices.",
    posts: ["future-of-web-development", "building-accessible-web-applications", "mastering-typescript"],
  },
  css: {
    title: "CSS",
    description: "Styling, layouts, and CSS techniques.",
    posts: ["building-accessible-web-applications"],
  },
}

interface TopicPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return Object.keys(topicMap).map((slug) => ({
    slug,
  }))
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = topicMap[params.slug as keyof typeof topicMap]

  if (!topic) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-3xl font-bold">Topic not found</h1>
        </div>
      </div>
    )
  }

  const topicPosts = blogPosts.filter((post) => topic.posts.includes(post.slug))

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{topic.title}</h1>
          <p className="mt-2 text-muted-foreground">{topic.description}</p>
        </div>

        <div className="space-y-6">
          {topicPosts.map((post) => (
            <BlogPost key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

