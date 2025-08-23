'use client';
import styles from './HeaderMobile.module.css';

export default function HeaderMobile() {
  return (
    <header className={styles.headerMobile} aria-label="Mobile header">
      {/* Соц-панель по фигме: 260×77, блюр, скругление, три иконки */}
      <nav className={styles.socials} aria-label="Social links">
        <a className={styles.socialBtn} href="#" target="_blank" rel="noopener noreferrer" aria-label="Dexscreener">
          <span className={`${styles.icon} ${styles.icDex}`} aria-hidden="true" />
        </a>
        <a className={styles.socialBtn} href="#" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
          <span className={`${styles.icon} ${styles.icX}`} aria-hidden="true" />
        </a>
        <a className={styles.socialBtn} href="#" target="_blank" rel="noopener noreferrer" aria-label="Arena / Portal">
          <span className={`${styles.icon} ${styles.icArena}`} aria-hidden="true" />
        </a>
      </nav>

    </header>
  );
}
