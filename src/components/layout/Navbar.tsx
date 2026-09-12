
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_24px_rgba(15,23,42,0.06)]'
            : 'bg-white/80 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-[72px]' : 'h-[84px]'
          }`}
        >

          {/* ==================== LOGO ==================== */}
          <Link
            href="/"
            className="group flex items-center gap-3 shrink-0"
            aria-label="KnobTech Pro Home"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                <img
                  src={'https://i.ibb.co.com/SDvG0p7D/Untitled-400-x-400-px.png'}
                  alt="KnobTech Pro Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>

            {/* Brand Name */}
            <div className="hidden sm:flex flex-col">
              <span className="text-[17px] font-extrabold tracking-tight text-slate-950 leading-none">
                KnobTech{' '}
                <span className="text-blue-600">Pro</span>
              </span>

              <span className="mt-1 text-[9px] font-bold tracking-[0.16em] text-slate-600 uppercase">
                Growth & Technology
              </span>
            </div>
          </Link>

          {/* ==================== DESKTOP NAV ==================== */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`
                    relative px-3.5 py-2 text-[13px] font-semibold rounded-lg
                    transition-all duration-200
                    ${
                      isActive
                        ? 'bg-slate-950 text-white shadow-sm'
                        : 'text-slate-600 hover:text-white hover:bg-slate-950'
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* ==================== DESKTOP CTA ==================== */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 hover:bg-blue-600 hover:shadow-blue-600/20 transition-all duration-300"
            >
              <span>Start a Conversation</span>

              <ArrowUpRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* ==================== MOBILE BUTTON ==================== */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* ==================== MOBILE MENU ==================== */}
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </header>
    </>
  );
};




