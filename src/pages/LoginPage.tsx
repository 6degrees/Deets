import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"

export function LoginPage() {
  const [error, setError] = useState("")

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("Use the live account at my/login on deets.pro to sign in.")
  }

  return (
    <section className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-5 py-32">
      <h1 className="font-display text-5xl tracking-[-0.05em] lowercase">
        log in
      </h1>
      <form className="mt-10 flex flex-col gap-6" onSubmit={onSubmit}>
        <label>
          <span className="text-xs tracking-[0.14em] text-ink-soft uppercase">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none focus:border-ink"
          />
        </label>
        <label>
          <span className="text-xs tracking-[0.14em] text-ink-soft uppercase">
            Password
          </span>
          <input
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none focus:border-ink"
          />
        </label>
        {error ? <p className="text-sm text-ink-soft">{error}</p> : null}
        <button
          type="submit"
          className="shine-hover mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-accent text-sm font-medium text-ink"
        >
          Log in
        </button>
      </form>
      <p className="mt-8 text-sm text-ink-soft">
        Need help?{" "}
        <Link to="/help" className="underline underline-offset-4">
          Contact us
        </Link>
      </p>
    </section>
  )
}
