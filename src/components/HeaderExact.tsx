'use client';
import styles from './HeaderExact.module.css';
import "./globals.css";

export default function HeaderExact() {
  return (
    <div className={styles.header} aria-label="Primary">
      {/* .rail убрал */}
      <nav className={styles.buttons}>
        <a className={styles.btn} href="#home"><span className={styles.label}>HOME</span></a>
        <a className={styles.btn} href="#about"><span className={styles.label}>ABOUT</span></a>
        <a className={styles.btn} href="#tokenomics"><span className={styles.label}>TOKENOMICS</span></a>
        <a className={styles.btn} href="#roadmap"><span className={styles.label}>ROADMAP</span></a>
      </nav>
    </div>
  );
}

