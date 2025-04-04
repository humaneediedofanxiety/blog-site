import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-8">
          {/* Profile Section */}
          <div className="rounded-lg border p-6 hover:border-black">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="shrink-0">
                <Image
                  src="/stalin.png"
                  alt="Author"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Mahmudul Hasan</h2>
                <p className="text-muted-foreground">
                  Aspiring Dad & Startup Masochist
                </p>
                <p className="mt-4">
                  <span className="text-blue-600">18 year old and looking to get laid</span>, the main reason for the blog is not to write for others but for myself, I wanted a place to write and keep me accountable and this place will be my public journal, anyways you guys know what the meaning to life is? It's creating a freakishly awesome dad lore. (don't mind stalin, he is a chill guy)
                </p>
                <div className="mt-4 flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Hobbies Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Hobbies</h2>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              <li className="rounded-lg border p-3 hover:border-black text-center">Computers</li>
              <li className="rounded-lg border p-3 text-center hover:border-black">Philosophy</li>
              <li className="rounded-lg border p-3 text-center hover:border-black">Powerlifting</li>
              <li className="rounded-lg border p-3 text-center hover:border-black">Movies/Series</li>
              <li className="rounded-lg border p-3 text-center hover:border-black">
                Social Isolation
              </li>
              <li className="rounded-lg border p-3 text-center hover:border-black">17+ More</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="flex flex-col md:flex-row md:space-x-8">
              {/* Left: Contact Info Card */}
              <div className="md:w-1/2 rounded-lg border p-6 flex flex-col justify-center hover:border-black">
                <h3 className="text-xl font-semibold mb-3">Let's Connect!</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Whether you are lonely and looking for a friend or simply wanna annoy me, I'm here. Reach out and let's get the conversation started.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 text-muted-foreground" />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5 text-muted-foreground" />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                  </a>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="md:w-1/2">
                <form className="space-y-4 rounded-lg border p-6 shadow-sm hover:border-black">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Write your message here..."
                      required
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

