'use client';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { Menu, X } from 'lucide-react';
import './header.css';

interface Props {
  transparent?: boolean;
}

const Header = ({ transparent = false }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${transparent ? 'transparent' : ''}`}>
      <Image src={logo} alt="Radical IT Logo" height={120} />
      <h1 className='site-name'>Radical IT</h1>
      <nav id="nav" className={menuOpen ? 'open' : ''}>
        <a href="/about">About</a>
        <a href="/services">Resources</a>
      </nav>
      <button id="menu-toggle" aria-label="Toggle menu" onClick={toggleMenu}>
        {menuOpen ? <X id="close-icon" /> : <Menu id="menu-icon" />}
      </button>
    </header>
  );
}

export default Header;