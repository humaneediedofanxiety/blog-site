import Link from "next/link"

// Define some sample topics
const topics = [
  { name: "React", slug: "react", count: 2 },
  { name: "TypeScript", slug: "typescript", count: 3 },
  { name: "Next.js", slug: "nextjs", count: 2 },
  { name: "Accessibility", slug: "accessibility", count: 1 },
  { name: "Performance", slug: "performance", count: 2 },
  { name: "CSS", slug: "css", count: 1 },
  { name: "JavaScript", slug: "javascript", count: 3 },
  { name: "Web Development", slug: "web-development", count: 4 },
]

export default function TopicsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold">Topics</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/topics/${topic.slug}`}
              className="flex flex-col rounded-lg border p-4 transition-colors hover:bg-muted/50"
            >
              <h2 className="text-xl font-semibold">{topic.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {topic.count} {topic.count === 1 ? "article" : "articles"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

