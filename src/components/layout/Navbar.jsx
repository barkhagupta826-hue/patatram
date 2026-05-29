

import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, ChevronRight, X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },

  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        animate={scrolled ? 'scrolled' : 'top'}
        variants={{
          top: {
            background: 'transparent',
            borderBottomColor: 'transparent',
            backdropFilter: 'blur(0px)',
          },
          scrolled: {
            background: 'rgba(255,253,249,0.97)',
            borderBottomColor: 'rgba(11,61,46,0.10)',
            backdropFilter: 'blur(20px)',
          },
        }}
        transition={{ duration: 0.35 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50, borderBottom: '1px solid transparent' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80 }}>

            {/* Logo */}
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                textDecoration: 'none'
              }}
            >
              <img
                src="/hii.png"
                alt="Logo"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  lineHeight: 1.3
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: scrolled ? '#14532d' : '#fff'
                  }}
                >
                  Patatram
                </span>

                <span
                  style={{
                    fontSize: 10,
                    color: scrolled ? '#9ca3af' : 'rgba(255,255,255,0.6)'
                  }}
                >
                  Rehabilation Center
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav style={{ display: 'none', alignItems: 'center', gap: 4 }} className="desktop-nav">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  style={({ isActive }) => ({
                    fontSize: 13,
                    padding: '6px 12px',
                    borderRadius: 6,
                    textDecoration: 'none',
                    color: isActive
                      ? scrolled ? '#14532d' : '#fff'
                      : scrolled ? '#6b7280' : 'rgba(255,255,255,0.8)',
                    background: isActive
                      ? scrolled ? 'rgba(20,83,45,0.1)' : 'rgba(255,255,255,0.2)'
                      : 'transparent',
                    transition: 'color 0.2s, background 0.2s',
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Right */}
            <div style={{ display: 'none', alignItems: 'center', gap: 12 }} className="desktop-right">
              <a
                href="tel:+91-6389804084"
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  fontSize: 13, textDecoration: 'none',
                  color: scrolled ? '#6b7280' : '#fff',
                }}
              >
                <Phone size={14} />
                +91-6389804084
              </a>
              <Link
                to="/contact"
                style={{
                  display: 'flex', alignItems: 'center', gap: 4,
                  background: '#14532d', color: '#fff',
                  padding: '8px 16px', borderRadius: 6,
                  fontSize: 13, textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Book Assessment <ChevronRight size={14} />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="mobile-menu-btn"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: 8, borderRadius: 8,
                color: scrolled ? '#14532d' : '#fff',
              }}
            >
              <Menu size={26} />
            </button>

          </div>
        </div>

        <style>{`
          @media (min-width: 1024px) {
            .desktop-nav { display: flex !important; }
            .desktop-right { display: flex !important; }
            .mobile-menu-btn { display: none !important; }
          }
        `}</style>
      </motion.header>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed', inset: 0,
                background: 'rgba(0,0,0,0.5)',
                zIndex: 98,
                backdropFilter: 'blur(2px)',
              }}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              style={{
                position: 'fixed', top: 0, right: 0,
                height: '100%', width: 300,
                background: '#fff',
                zIndex: 99,
                display: 'flex', flexDirection: 'column',
                boxShadow: '-4px 0 40px rgba(0,0,0,0.15)',
              }}
            >
              {/* Drawer header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '20px 24px',
                borderBottom: '1px solid rgba(20,83,45,0.1)',
              }}>
                <Link to="/" onClick={() => setMobileOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                  <img src="/hii.png" alt="Logo" style={{ maxHeight: 44, width: 'auto', objectFit: 'contain' }} />
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#14532d' }}>Patatram</span>
                </Link>

                <button
                  onClick={() => setMobileOpen(false)}
                  style={{
                    background: 'rgba(20,83,45,0.08)', border: 'none',
                    width: 36, height: 36, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', color: '#14532d',
                    flexShrink: 0,
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav Links */}
              <nav style={{ flex: 1, overflowY: 'auto', padding: '16px 16px' }}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.25 }}
                  >
                    <NavLink
                      to={link.to}
                      style={({ isActive }) => ({
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '13px 16px',
                        marginBottom: 4,
                        borderRadius: 10,
                        textDecoration: 'none',
                        fontSize: 15,
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? '#14532d' : '#374151',
                        background: isActive ? 'rgba(20,83,45,0.08)' : 'transparent',
                        transition: 'background 0.15s, color 0.15s',
                      })}
                    >
                      {link.label}
                      <ChevronRight size={15} style={{ opacity: 0.4 }} />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer */}
              <div style={{
                padding: '20px 24px',
                borderTop: '1px solid rgba(20,83,45,0.1)',
                display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <a
                  href="tel:+91-6389804084"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '11px 16px', borderRadius: 10,
                    border: '1.5px solid rgba(20,83,45,0.2)',
                    color: '#14532d', fontSize: 14, textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  <Phone size={15} />
                  +91-6389804084
                </a>

                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    background: '#14532d', color: '#fff',
                    padding: '13px 16px', borderRadius: 10,
                    fontSize: 14, textDecoration: 'none', fontWeight: 600,
                  }}
                >
                  Book Assessment <ChevronRight size={15} />
                </Link>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}