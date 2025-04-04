import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"
import { formatDate } from "@/lib/utils"

export default function ArchivePage() {
  // Group posts by year
  const postsByYear = blogPosts.reduce(
    (acc, post) => {
      const year = new Date(post.date).getFullYear().toString()
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(post)
      return acc
    },
    {} as Record<string, typeof blogPosts>,
  )

  // Sort years in descending order
  const years = Object.keys(postsByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold">Archive</h1>

        <div className="space-y-8">
          {years.map((year) => (
            <div key={year}>
              <h2 className="mb-4 text-2xl font-semibold">{year}</h2>
              <div className="space-y-2">
                {postsByYear[year].map((post) => (
                  <div key={post.slug} className="rounded-lg border p-4 hover:border-black">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <div>
                        <Link href={`/blog/${post.slug}`} className="font-medium hover:text-primary hover:underline">
                          {post.title}
                        </Link>
                      </div>
                      <div className="text-sm text-muted-foreground">{formatDate(post.date)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

