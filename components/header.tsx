"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Historia", href: "/historia" },
    { label: "Guia Iniciantes", href: "/guia-iniciantes" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <SushiIcon />
          <span className="text-lg font-semibold text-foreground">Arte Sushi</span>
        </Link>
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

function SushiIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#E8734A" opacity="0.15" />
      <ellipse cx="16" cy="18" rx="10" ry="6" fill="#E8734A" opacity="0.3" />
      <ellipse cx="16" cy="16" rx="8" ry="5" fill="#F5A67B" />
      <ellipse cx="16" cy="15" rx="6" ry="3.5" fill="#E8734A" />
      <ellipse cx="16" cy="14.5" rx="4" ry="2" fill="#F5C6A0" />
    </svg>
  )
}
