import type { Metadata } from 'next'
import './globals.css'
import Navbar from './navbar'

export const metadata: Metadata = {
    title: "Oskar 'teksusik.' Dyka - Homepage",
    description: "Oskar 'teksusik.' Dyka - Personal homepage",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
                <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    )
}
