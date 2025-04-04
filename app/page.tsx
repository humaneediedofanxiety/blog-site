import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/components/blog-post";
import { blogPosts } from "@/lib/blog-data";

export default function Home() {
  // Destructure the first post as featured and the rest as other posts
  const [featured, ...otherPosts] = blogPosts;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Featured Post Section */}
        {featured && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border rounded-lg p-8 border-black">
            <div>
              <Link href={`/blog/${featured.slug}`}>
                <h1 className="text-5xl font-bold mb-4">{featured.title}</h1>
                <p className="text-xl mb-6">{featured.excerpt}</p>
                <span className="text-blue-600 hover:underline font-medium">
                  Read More &rarr;
                </span>
              </Link>
            </div>
            <div className="relative w-full h-72 md:h-80">
              <Image
                src="/web-development.png"
                alt={featured.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Other Posts Section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map((post) => (
              <div key={post.slug} className="border rounded-lg p-6 hover:border-black">
                <Link href={`/blog/${post.slug}`}>

                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    {post.excerpt.substring(0, 100)}...
                  </p>
                  <span className="text-blue-600 hover:underline font-medium">
                    Read More &rarr;
                  </span>

                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

