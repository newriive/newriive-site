'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[#164D94]">
          Newriive
        </Link>
        <ul className="flex space-x-6 text-gray-700 text-sm font-medium">
          <li>
            <Link href="/about" className="hover:text-[#2BB3A3] transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/join" className="hover:text-[#2BB3A3] transition">
              Join
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
