import { useState } from 'react';
import { navLinks } from '../constants';

// komponen reusable
const NavbarItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((link) => (
      <li className="nav-li" key={link.id}>
        <a href={link.href} onClick={onClick} className="nav-li_a">
          {link.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  // handle navmenu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mx-auto py-5 c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Abbu Solihin Alhakim
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavbarItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavbarItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
