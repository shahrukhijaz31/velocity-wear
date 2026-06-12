// Server component: renders structured blog blocks into semantic, crawlable HTML.
// Kept free of 'use client' so the article body is fully server-rendered for SEO.

function Heading2({ children }) {
  return (
    <h2 className="mt-12 font-display text-2xl uppercase leading-tight tracking-tight text-white sm:text-3xl">
      {children}
    </h2>
  );
}

function Heading3({ children }) {
  return (
    <h3 className="mt-9 text-lg font-bold text-white sm:text-xl">{children}</h3>
  );
}

export default function BlogContent({ blocks = [] }) {
  return (
    <div className="blog-prose">
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'h2':
            return <Heading2 key={i}>{b.x}</Heading2>;
          case 'h3':
            return <Heading3 key={i}>{b.x}</Heading3>;
          case 'p':
            return (
              <p
                key={i}
                className={
                  b.lead
                    ? 'mt-6 text-lg leading-relaxed text-slate-200/90 sm:text-xl'
                    : 'mt-5 text-[15px] leading-relaxed text-slate-300/85 sm:text-base'
                }
              >
                {b.x}
              </p>
            );
          case 'ul':
            return (
              <ul key={i} className="mt-5 space-y-3">
                {b.items.map((it, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[15px] leading-relaxed text-slate-300/85 sm:text-base"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow shadow-glow"
                      aria-hidden
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i} className="mt-5 space-y-3">
                {b.items.map((it, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[15px] leading-relaxed text-slate-300/85 sm:text-base"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-glow/40 bg-cyan-glow/10 text-xs font-bold text-cyan-glow">
                      {j + 1}
                    </span>
                    <span className="pt-0.5">{it}</span>
                  </li>
                ))}
              </ol>
            );
          case 'quote':
            return (
              <blockquote
                key={i}
                className="glass relative mt-8 rounded-2xl border-l-2 border-cyan-glow/60 px-6 py-5"
              >
                <p className="text-base font-medium italic leading-relaxed text-slate-100 sm:text-lg">
                  “{b.x}”
                </p>
                {b.by && (
                  <footer className="mt-3 text-sm font-semibold text-electric">— {b.by}</footer>
                )}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
