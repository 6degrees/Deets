import { useMemo, useState } from "react"
import { directoryPeople } from "../data/site"

export function DirectoryPage() {
  const [q, setQ] = useState("")
  const people = useMemo(() => {
    const n = q.trim().toLowerCase()
    if (!n) return directoryPeople
    return directoryPeople.filter(
      (p) =>
        p.name.toLowerCase().includes(n) ||
        p.handle.toLowerCase().includes(n) ||
        p.blurb.toLowerCase().includes(n),
    )
  }, [q])

  return (
    <section className="px-5 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
      <p className="text-[13px] tracking-[0.18em] text-ink-soft uppercase">
        Directory · people
      </p>
      <h1 className="mt-4 font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.05em] lowercase">
        People
      </h1>
      <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
        Profiles that opted into the public directory. More directory types
        (stores, events, …) coming later.
      </p>
      <label className="mt-10 block max-w-md">
        <span className="sr-only">Search</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search"
          className="w-full border-b border-line bg-transparent py-3 outline-none focus:border-ink"
        />
      </label>
      <ul className="mt-12 divide-y divide-line border-y border-line">
        {people.map((p) => (
          <li key={p.handle}>
            <a href={p.href} className="block py-6 hover:text-magenta">
              <p className="font-display text-2xl tracking-tight">{p.name}</p>
              <p className="mt-1 text-sm text-ink-soft">{p.handle}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                {p.blurb}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
