'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../../public/logo.png';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.scss';

const Header = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isHomePage = pathname === '/';

  const headerClasses = `${styles.header} ${isHomePage ? styles.transparent : ''}`;
  const navClasses = `${styles.nav} ${menuOpen ? styles.open : ''}`;
  
  return (
    <header className={headerClasses}>
      <Image src={logo} alt="Radical IT Logo" className={styles.logo} />
      {/* Wrap h1 with Link component */}
      <Link href="/" className={styles.siteNameLink}>
        <h1 className={styles.siteName}>Radical IT</h1>
      </Link>
      <nav className={navClasses}>
        <a href="/about">About</a>
        <a href="/services">Resources</a>
      </nav>
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

export default Header;