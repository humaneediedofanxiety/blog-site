export default function Footer() {
  return (
    <footer className="border-t bg-background py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-sm font-medium text-foreground">
            © {new Date().getFullYear()} <span className="font-semibold">Mahmudul Hasan</span>. All rights reserved.
          </p>
          <a
            href="mailto:saysayeem.pr@gmail.com"
            className="text-sm font-medium text-primary hover:underline"
          >
            saysayeem.pr@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}

