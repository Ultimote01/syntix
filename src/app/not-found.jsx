import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="">
      <div className="">
        <p className="">
          404
        </p>
        <h1 className="">
          Page not found
        </h1>
        <p className="">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          href="/"
          className=""
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}
