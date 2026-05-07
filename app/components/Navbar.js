'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [plantsDropdown, setPlantsDropdown] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4"
      style={{
        background: 'rgba(11, 26, 11, 0.88)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: '#3d8c3d' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2Z" />
            </svg>
          </div>
          <span className="text-white font-semibold text-lg">FloraVision.</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <li>
            <Link href="#" className="hover:text-white transition-colors">
              About
            </Link>
          </li>
          <li className="relative">
            <button
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
              onMouseEnter={() => setPlantsDropdown(true)}
              onMouseLeave={() => setPlantsDropdown(false)}
            >
              Our Plants
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {plantsDropdown && (
              <div
                onMouseEnter={() => setPlantsDropdown(true)}
                onMouseLeave={() => setPlantsDropdown(false)}
                className="absolute top-6 left-0 w-44 rounded-xl py-2 z-50"
                style={{ background: '#162816', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Link
                  href="#trending"
                  className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Trending Plants
                </Link>
                <Link
                  href="#top-selling"
                  className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Top Selling
                </Link>
                <Link
                  href="#o2"
                  className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  O₂ Plants
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link href="#" className="hover:text-white transition-colors">
              Tours
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white transition-colors">
              Search
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-gray-400 hover:text-white transition-colors">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <button className="hidden md:block text-gray-400 hover:text-white transition-colors">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          className="md:hidden mt-4 pb-4 flex flex-col gap-4 px-2 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}
        >
          <Link href="#" className="text-gray-400 hover:text-white text-sm pt-4" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="#trending" className="text-gray-400 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>
            Our Plants
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>
            Tours
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>
            Search
          </Link>
        </div>
      )}
    </nav>
  )
}
