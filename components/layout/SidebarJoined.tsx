'use client'

import { useState } from 'react'
import {
  ChevronDown,
  Home,
  Star,
  MessageCircle,
  BookOpen,
} from 'lucide-react'

type SidebarItemType = {
  label: string
  href: string
  active?: boolean
}

type SidebarSectionType = {
  key: string
  title: string
  icon: React.ReactNode
  items?: SidebarItemType[] // 👈 OPTIONAL
  href?: string             // 👈 for non-dropdown
}



const SIDEBAR_MENU: SidebarSectionType[] = [
  {
    key: 'About',
    title: 'About',
    icon: <Home size={16} />,
    href: "/joined/about"
  },
  {
    key: 'Rewards',
    title: 'Rewards',
    icon: <Star size={16} />,
    href: "/joined/rewards"
  },
  {
    key: 'Requirements',
    title: 'Requirements',
    icon: <Star size={16} />,
    href: "/joined/requirements"
  },
  {
    key: 'Assets',
    title: 'Assets',
    icon: <Star size={16} />,
    href: "/joined/sssets"
  },
  {
    key: 'Community',
    title: 'Community',
    icon: <MessageCircle size={16} />,
    items: [
      { label: 'Chat', href: '/chat' },
      { label: 'Leaderboard', href: '/leaderboard' },
    ],
  },
  {
    key: 'My Submissions',
    title: 'My Submissions',
    icon: <BookOpen size={16} />,
    href: "/joined/my-submissions"
  },
]


export default function SidebarJoined() {
  const [open, setOpen] = useState<string | null>('Home')

  return (
    // <aside className="relative h-screen w-64 bg-[#0b0b0b] text-white border-r border-white/10">
    <aside className="hidden md:block w-64 h-screen bg-[#0b0b0b] text-white border-r border-white/10">

      {/* Header image */}
      <div className="border-b border-white/10">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/bb/a3/97/predator-ride-in-the.jpg?w=900&h=500&s=1"
          className="w-full"
        />
        <div className="p-3">
          <p className="font-semibold text-sm">Rayston Heem Clipping</p>
          <span className="text-xs text-green-400">● Online</span>
        </div>
      </div>

      {/* Profile */}
      <div className="px-4 py-4 border-b border-white/10 flex items-center gap-3">
        <img
          src="https://placehold.co/40"
          className="h-10 w-10 rounded-lg object-cover"
        />
        <div>
          <p className="font-semibold text-sm">Rayston Heem Clipping</p>
          <p className="text-xs text-white/60">JOINED</p>
        </div>
      </div>

      {/* Menu */}
      <div className="px-2 py-3 space-y-2 text-sm">
        {SIDEBAR_MENU.map((section) =>
          section.items ? (
            <Dropdown
              key={section.key}
              title={section.title}
              icon={section.icon}
              open={open === section.key}
              onClick={() =>
                setOpen(open === section.key ? null : section.key)
              }
            >
              {section.items.map((item) => (
                <Item
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </Dropdown>
          ) : (
            <Item
              key={section.key}
              label={section.title}
              href={section.href!}
              icon={section.icon}
            />
          )
        )}
      </div>

    </aside>
  )
}
function Dropdown({
  title,
  icon,
  open,
  onClick,
  children,
}: {
  title: string
  icon: React.ReactNode
  open: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between rounded-md px-3 py-2 hover:bg-white/5"
      >
        <div className="flex items-center gap-3">
          {icon}
          <span>{title}</span>
        </div>
        <ChevronDown
          size={14}
          className={`transition ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="ml-7 mt-1 space-y-1">
          {children}
        </div>
      )}
    </div>
  )
}

import Link from 'next/link'

function Item({
  label,
  href,
  active,
  icon,
}: {
  label: string
  href: string
  active?: boolean
  icon?: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm
        ${active
          ? 'bg-white/10 text-white'
          : 'text-white/70 hover:bg-white/5'
        }`}
    >
      {icon}
      {label}
    </Link>
  )
}
