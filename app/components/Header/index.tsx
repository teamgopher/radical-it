'use client';
// Global imports
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// Local imports
import logo from '../../../public/logo.png';
import styles from './Header.module.scss';
import Navbar from './Navbar';

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isHomePage = pathname === '/';

  const headerClasses = `${styles.header} ${isHomePage ? styles.transparent : ''}`;
  
  return (
    <header className={headerClasses}>
      <Link href="/" className={styles.siteNameLink}>
        <Image src={logo} alt="Radical IT Logo" className={styles.logo} />
        <h1 className={styles.siteName}>Radical IT</h1>
      </Link>
      <Navbar menuOpen={menuOpen} />
      <button
        className={styles.menuToggle}
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        {menuOpen ? <X className={styles.closeIcon} /> : <Menu className={styles.menuIcon} />}
      </button>
    </header>
  );
}