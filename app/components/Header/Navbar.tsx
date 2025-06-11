// Local imports
import { navigation } from '../../config/navigation';
import styles from './Header.module.scss';

interface Props {
  menuOpen: boolean;
}

export default function Navbar({ menuOpen }: Props) {
  const navClasses = `${styles.nav} ${menuOpen ? styles.open : ''}`;
  return (
    <nav className={navClasses}>
      {navigation.map((item) => (
        <a
          key={item.label}
          href={item.path}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}