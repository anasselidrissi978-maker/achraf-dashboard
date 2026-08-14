import { Logo } from "./Logo";

export function BrandHeader() {
  return (
    <header className="pattern-oriental sticky top-0 z-30 border-b border-gold-500/20 bg-ink-900">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
        <Logo />
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/15 text-cream-100">
          <span className="text-sm">👤</span>
        </div>
      </div>
    </header>
  );
}
