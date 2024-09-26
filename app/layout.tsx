import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'
import Navbar from './navbar'
import Footer from './footer'

export const metadata: Metadata = {
    title: "Oskar 'teksusik.' Dyka",
    description: "Oskar 'teksusik.' Dyka - Personal homepage",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto"
                suppressHydrationWarning
            >
                <Providers>
                    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                        <Navbar />
                        {children}
                        <Footer />
                    </main>
                </Providers>
            </body>
        </html>
    )
}
