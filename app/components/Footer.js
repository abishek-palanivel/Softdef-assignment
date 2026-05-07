'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [email, setEmail] = useState('')

  function handleSubscribe(e) {
    e.preventDefault()
    if (email.trim()) {
      alert('Thanks for subscribing!')
      setEmail('')
    }
  }

  return (
    <footer
      className="pt-16 pb-8 px-6 md:px-12"
      style={{ background: '#0b1a0b', borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
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
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: '#7a9a7a' }}>
              Bringing the beauty of nature into your everyday spaces. Premium plants, expertly
              curated for your home and office.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="text-sm transition-colors hover:text-white" style={{ color: '#7a9a7a' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#trending" className="text-sm transition-colors hover:text-white" style={{ color: '#7a9a7a' }}>
                  Type&apos;s Of plant&apos;s
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm transition-colors hover:text-white" style={{ color: '#7a9a7a' }}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm transition-colors hover:text-white" style={{ color: '#7a9a7a' }}>
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-base mb-2">For Every Update</h4>
            <p className="text-sm mb-5" style={{ color: '#7a9a7a' }}>
              Subscribe to get the latest plant care tips and new arrivals.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2.5 rounded-lg text-sm text-white outline-none w-full"
                style={{
                  background: '#1a2e1a',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'white',
                }}
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:opacity-80"
                style={{ background: '#2d5a2d' }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', color: '#7a9a7a' }}
        >
          <p>© {new Date().getFullYear()} FloraVision. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
