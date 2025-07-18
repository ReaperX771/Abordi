import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const sections = [
  { id: 'home', label: 'Home', offset: 50 },
  { id: 'features', label: 'Features', offset: 50 },
  { id: 'how', label: 'How It Works', offset: 50 },
  { id: 'testimonial', label: 'Testimonial', offset: 50 },
  { id: 'showcase', label: 'Showcase', offset: 50 },
  { id: 'usecase', label: 'Usecase', offset: 50 },
  { id: 'faq', label: 'FAQ', offset: 10 },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; // Explicitly set to auto for scrolling
    }
    return () => {
      document.body.style.overflow = 'auto'; // Ensure cleanup restores scrolling
    };
  }, [menuOpen]);

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i].id);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection('home');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed overflow-x-hidden top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex justify-between items-center py-5 w-[90%] m-auto">
          <div className="z-50 relative">
            <img className="w-40 h-10" src={logo} alt="Logo" />
          </div>

          {/* Hamburger Button for Mobile */}
          <button
            className="lg:hidden flex flex-col hover:text-[#4076FF] focus:outline-none gap-1 z-30"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-7 h-1 bg-[#130740] rounded"></span>
            <span className="block w-7 h-1 bg-[#130740] rounded"></span>
            <span className="block w-7 h-1 bg-[#130740] rounded"></span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex gap-7 text-[17px] cursor-pointer text-[#130740]">
              {sections.map((s) => (
                <AnchorLink key={s.id} offset={s.offset} href={`#${s.id}`}>
                  <li
                    className={`font-bold ${activeSection === s.id ? 'text-[#4076FF]' : ''}`}
                  >
                    {s.label}
                  </li>
                </AnchorLink>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Overlay with Slide-in Transition */}
        <div
          className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
            menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          <div
            className={`absolute top-0 right-0 h-full w-full flex flex-col items-center justify-start transform transition-transform duration-700 bg-white ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex items-center justify-end w-full px-8 pt-6">
              <button
                className="text-5xl font-bold text-[#130740] hover:text-[#4076FF] focus:outline-none"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <ul className="flex flex-col gap-8 text-center text-2xl font-bold text-[#130740] mt-16">
              {sections.map((s) => (
                <AnchorLink key={s.id} offset={s.offset} href={`#${s.id}`} onClick={() => setMenuOpen(false)}>
                  <li
                    className={`${activeSection === s.id ? 'text-[#4076FF]' : ''}`}
                  >
                    {s.label}
                  </li>
                </AnchorLink>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-[80px] lg:h-[88px]"></div>
    </>
  );
}

export default Navbar;