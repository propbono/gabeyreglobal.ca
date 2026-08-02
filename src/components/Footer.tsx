export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t bg-primary px-4 pb-14 pt-10 text-primary-foreground/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm">
          &copy; {year} Gabeyre Global Inc. All rights reserved.
        </p>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
          Built with TanStack Start
        </p>
      </div>
    </footer>
  )
}
