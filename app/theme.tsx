'use client'

import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="transition-all hover:text-neutral-800 flex align-middle relative py-1 px-2 m-1">
            <button
                onClick={async () =>
                    setTheme(theme === 'light' ? 'dark' : 'light')
                }
            >
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </div>
    )
}
