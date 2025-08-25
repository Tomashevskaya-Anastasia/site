'use client';
import styles from './HeaderExact.module.css';

export default function HeaderExact() {
  return (
    <div className={styles.header} aria-label="Primary">
      <nav className={styles.navButtons}>
        <a className={styles.navBtn} href="#home"><span className={styles.navLabel}>HOME</span></a>
        <a className={styles.navBtn} href="#about"><span className={styles.navLabel}>ABOUT</span></a>
        <a className={`${styles.navBtn} ${styles.navBtnRoadmap}`} href="#roadmap">
          <span className={styles.navLabel}>ROADMAP</span>
        </a>
        <a className={`${styles.navBtn} ${styles.navBtnTokenomics}`} href="#tokenomics">
          <span className={styles.navLabel}>TOKENOMICS</span>
        </a>
      </nav>
    </div>
  );
}
