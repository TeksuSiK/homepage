import type { Metadata } from 'next'
import './globals.css'

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
            <body>{children}</body>
        </html>
    )
}
