import Link from 'next/link'

export default function Custom404() {
    return (
        <div className="flex flex-col items-center min-h-screen text-center">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">
                Oops! The page you’re looking for doesn’t exist.
            </p>
            <Link href="/" className="text-blue-500 hover:underline text-lg">
                Go back to Home
            </Link>
        </div>
    )
}
