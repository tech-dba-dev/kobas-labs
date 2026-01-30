import Link from "next/link"
import { KobasLogo } from "./header"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 py-12 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center justify-between gap-8 px-4 md:flex-row">
          {/* Logo */}
          <div className="flex items-center">
            <KobasLogo className="h-8 w-auto" />
          </div>

          {/* Links */}
          <nav className="flex gap-10 text-sm font-medium text-muted-foreground">
            <Link href="/privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-primary">
              Terms of Use
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Kobas Labs LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
