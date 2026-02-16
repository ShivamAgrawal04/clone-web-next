'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
    User,
    Shield,
    Bell,
    BadgeDollarSign,
    LifeBuoy,
} from 'lucide-react'

export type SidebarItemType = {
    label: string
    href: string
    icon: React.ReactNode
}

export const SETTINGS_MENU: SidebarItemType[] = [
    {
        label: 'Edit profile',
        href: '/settings',
        icon: <User size={18} />,
    },
    {
        label: 'Account security',
        href: '/settings/security',
        icon: <Shield size={18} />,
    },
    {
        label: 'Notifications',
        href: '/settings/notifications',
        icon: <Bell size={18} />,
    },
    {
        label: 'Balance',
        href: '/settings/balance',
        icon: <BadgeDollarSign size={18} />,
    },
    {
        label: 'Resolution center',
        href: '/settings/resolution',
        icon: <LifeBuoy size={18} />,
    },
]

export default function SidebarSettings() {
    const pathname = usePathname()

    return (
        <aside className="hidden md:block w-70 h-screen bg-black border-r border-zinc-900 overflow-y-auto">
            {/* Header */}
            <div className="px-6 pt-10 pb-6">
                <h2 className="text-[12px] font-bold text-white/50 uppercase tracking-widest">
                    Account Settings
                </h2>
            </div>

            {/* Menu */}
            <div className="px-3 space-y-1">
                {SETTINGS_MENU.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex items-center gap-4 rounded-xl px-4 py-3 text-[15px] transition-all duration-200
                ${isActive
                                    ? 'bg-zinc-800 text-white font-bold'
                                    : 'text-zinc-500 hover:text-zinc-300 font-medium'
                                }`}
                        >
                            <span className={isActive ? 'text-white' : 'text-zinc-500'}>
                                {item.icon}
                            </span>
                            {item.label}
                        </Link>
                    );
                })}
            </div>
        </aside>
    )
}
