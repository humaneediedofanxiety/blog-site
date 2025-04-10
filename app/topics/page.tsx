import Link from "next/link"

// Define some sample topics
const topics = [
  { name: "Software", slug: "Software", count: 0 },
  { name: "Books", slug: "Books", count: 1 },
  { name: "Movies", slug: "Movies", count: 0 },
  { name: "Personal", slug: "Personal", count: 1 },
  { name: "Academics", slug: "Academics", count: 0 },
  { name: "Learning", slug: "Learning", count: 1 },
  { name: "Fitness", slug: "Fitness", count: 1 },
  { name: "404", slug: "404", count: 4 },
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
              className="flex flex-col rounded-lg border p-4 hover:bg-muted/50 hover:border-black"
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

