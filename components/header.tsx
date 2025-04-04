import Link from "next/link";
import Image from "next/image";
import { Search, Rss } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center">
            <Link href="/"><Image src="/78925ed7b913a9fdd0a47cf39835509e-removebg-preview.png" alt="Logo" width={60} height={20} /></Link>
          </div>

          <nav className="flex items-center">
            <Link href="/archive" className="px-3 py-2 text-sm font-medium hover:underline hover:text-blue-600">
              Archive
            </Link>
            <Link href="/topics" className="px-3 py-2 text-sm font-medium hover:underline hover:text-blue-600">
              Topics
            </Link>
            <Link href="/tutorials" className="px-3 py-2 text-sm font-medium hover:underline text-blue-600">
              404
            </Link>
            <Link href="/about" className="px-3 py-2 text-sm font-medium hover:underline hover:text-blue-600">
              About
            </Link>
            <div className="flex items-center pl-2">
              <button aria-label="Search" className="p-2">
                <Search size={20} />
              </button>
              <button aria-label="RSS Feed" className="p-2">
                <Rss size={20} />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

