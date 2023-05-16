import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import styles from '../NavBar/NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
        <li><Link href="/">Home</Link></li>
        <li>Shop</li>
        <li><Link href="/favorites">Favorites</Link></li>
      </ul>
    </nav>
  );
}