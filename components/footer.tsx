export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mahmudul Hasan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">saysayeem.pr@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

