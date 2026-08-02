import { Link } from '@tanstack/react-router'
import { COMPANY, NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const serviceLinks = NAV_ITEMS[0].children
const companyLinks = NAV_ITEMS.slice(1)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Col 1: Company info — spans 4 */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="text-lg font-bold text-primary-foreground no-underline"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {COMPANY.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
              {COMPANY.tagline}
            </p>
          </div>

          {/* Col 2: Services links — spans 2 */}
          <div className="lg:col-span-2">
            <h4 className="mb-3 text-sm font-semibold text-primary-foreground">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company links — spans 2 */}
          <div className="lg:col-span-2">
            <h4 className="mb-3 text-sm font-semibold text-primary-foreground">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: placeholder — spans 4 */}
          <div className="lg:col-span-4" />
        </div>

        {/* Copyright row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-sm text-primary-foreground/60">
            &copy; {year} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-primary-foreground/50 transition-colors hover:text-primary-foreground"
              >
                <LinkedInIcon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
