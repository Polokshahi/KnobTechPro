import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



export const Footer = () => {
  return (
    <footer className="bg-[#07111F] text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          <div className="lg:col-span-2">


            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white">
               <img className={
              'rounded-full'
               } src="https://i.ibb.co.com/SDvG0p7D/Untitled-400-x-400-px.png" alt="KnobTech Pro logo" />
              </div>
              <span className="font-bold text-white text-lg">KnobTech <span className="text-blue-500">Pro</span></span>
            </Link>



            <p className="text-sm text-slate-400 max-w-sm mb-6">B2B Growth & Technology Partner helping businesses generate qualified opportunities and build scalable digital systems.</p>
            <div className="text-xs text-slate-500">© 2026 KnobTech Pro. All rights reserved.</div>

            {/* logo */}
            <div className="flex items-center gap-3 ">

              <div className="flex items-center gap-3 mt-6 ">

              <Link target='_blank' href="https://www.linkedin.com/company/knobtechpro/?viewAsMember=true" className="hover:text-blue-500">
                <FaLinkedin className="h-6 w-6" />
              </Link>
            </div>


            <div className="flex items-center gap-3 mt-6">

              <Link target='_blank' href="https://www.facebook.com/profile.php?id=61582140315968" className="hover:text-blue-500">
                <FaFacebook className="h-6 w-6" />
              </Link>
            </div>

            </div>







          </div>

          <div>
            <div className="font-bold text-white text-sm uppercase tracking-wider mb-4">Services</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services" className="hover:text-white">B2B Lead Generation</Link></li>
              <li><Link href="/services" className="hover:text-white">Cold Email Outreach</Link></li>
              <li><Link href="/services" className="hover:text-white">Apollo Data Research</Link></li>
              <li><Link href="/services" className="hover:text-white">Full-Stack Development</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white text-sm uppercase tracking-wider mb-4">Company</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white text-sm uppercase tracking-wider mb-4">Technology</div>
            <ul className="space-y-2.5 text-sm">
              <li className="text-slate-300">TypeScript</li>
              <li className="text-slate-300">Node.js</li>
              <li className="text-slate-300">Next.js</li>
              <li className="text-slate-300">PostgreSQL</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400">Terms of Service</Link>
          </div>
          <div>Engineered for High B2B Conversion & Scale</div>
        </div>
      </div>
    </footer>
  );
};