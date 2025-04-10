import { BlogPost } from "@/components/blog-post"
import { blogPosts } from "@/lib/blog-data"

// This is a simplified version - in a real app, you'd have proper topic metadata
const topicMap = {
  Software: {
    title: "Software",
    description: "Posts about coding, tech, and all things computers.",
    posts: ["future-of-web-development", "building-accessible-web-applications", "mastering-typescript", "modern-css-techniques", "understanding-react-hooks"],
  },

  Books: {
    title: "Books",
    description: "Things I have read or maybe wanted to read and a few thoughts.",
    posts: ["learn-read"],
  },

  Movies: {
    title: "Movies",
    description: "Cool films, random thoughts, maybe a review or two.",
    posts: [],
  },

  Personal: {
    title: "Personal",
    description: "Trying to become a better version of me, slowly but surely.",
    posts: ["cant-sleep"],
  },

  Academics: {
    title: "Academics",
    description: "Mainly school, study tips, and staying sane.",
    posts: [],
  },

  Learning: {
    title: "Learning",
    description: "Posts about learning techniques, systems and maybe also about extreme challenges.",
    posts: ["learn-read"],
  },

  Fitness: {
    title: "Fitness",
    description: "How to get that dad strength 101.",
    posts: ["powerlifting-goals"],
  },

  404: {
    title: "404",
    description: "The leftover brain dump zone.",
    posts: ["i-can't-write", "lonely-man", "take-the-leap", "feeling-lazy"],
  },
};

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

