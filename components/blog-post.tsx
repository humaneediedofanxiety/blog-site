import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Post } from "@/lib/blog-data"

interface BlogPostProps {
  post: Post
  isFullPost?: boolean
}

export function BlogPost({ post, isFullPost = false }: BlogPostProps) {
  if (isFullPost) {
    return (
      <article className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{post.title}</h1>
          <p className="text-muted-foreground">{post.excerpt}</p>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <span className="font-medium">{post.author.name}</span>
            <span className="text-muted-foreground">
              {" "}
              — {formatDate(post.date)} — {post.readingTime} min read
            </span>
          </div>
        </div>

        {post.coverImage && (
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={450}
              className="w-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-gray mx-auto dark:prose-invert">{post.content}</div>
      </article>
    )
  }

  return (
    <article className="overflow-hidden rounded-lg border">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            width={400}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <div className="space-y-4">
            <div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-bold tracking-tight">{post.title}</h2>
              </Link>
              <p className="mt-2 line-clamp-3 text-muted-foreground">{post.excerpt}</p>
            </div>

            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <span className="font-medium">{post.author.name}</span>
                <span className="text-muted-foreground">
                  {" "}
                  — {formatDate(post.date)} — {post.readingTime} min read
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

