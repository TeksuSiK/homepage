import Link from 'next/link'

const navItems = {
    '/': {
        name: 'home',
    },
}

export default function Navbar() {
    return (
        <div className="-ml-[8px] mb-16 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <div className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
                    <div className="flex flex-row space-x-0 pr-10">
                        {Object.entries(navItems).map(([path, { name }]) => {
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className="transition-all hover:text-neutral-800 flex align-middle relative py-1 px-2 m-1"
                                >
                                    {name}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}