import Link from 'next/link'

export default function Contact() {
    return (
        <div>
            <div className="mb-8 text-2xl font-semibold">Contact Me</div>

            <div className="space-y-4">
                <div>
                    <Link
                        href="mailto:oskar@teksusik.pl"
                        className="text-blue-500 underline"
                    >
                        E-mail
                    </Link>
                </div>
                <div>
                    <Link
                        href="https://github.com/TeksuSiK"
                        className="text-blue-500 underline"
                    >
                        GitHub
                    </Link>
                </div>
                <div>
                    <Link
                        href="https://discord.com/users/407107019984732181"
                        className="text-blue-500 underline"
                    >
                        Discord
                    </Link>
                </div>
            </div>
        </div>
    )
}
