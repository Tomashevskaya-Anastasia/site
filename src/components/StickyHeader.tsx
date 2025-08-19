'use client';

import Image from 'next/image';
import styles from './StickyHeader.module.css';

export default function StickyHeader() {
  return (
    <nav className={styles.wrap} aria-label="Main">
      {/* художественная рамка поверх «стекла» */}
      <Image src="/ui/header/frame.svg" alt="" fill priority className={styles.frame} />

      <div className={styles.rail}>
        <a href="#home" className={`${styles.btn} ${styles.home}`} aria-label="Home">
          <Image src="/ui/header/button-home.png" alt="" fill className={styles.imgBase} priority />
          <Image src="/ui/header/button-home-hover.png" alt="" fill className={styles.imgHover} />
        </a>

        <a href="#about" className={`${styles.btn} ${styles.about}`} aria-label="About">
          <Image src="/ui/header/button-about.png" alt="" fill className={styles.imgBase} />
          <Image src="/ui/header/button-about-hover.png" alt="" fill className={styles.imgHover} />
        </a>

        <a href="#tokenomics" className={`${styles.btn} ${styles.tokenomics}`} aria-label="Tokenomics">
          <Image src="/ui/header/button-tokenomics.png" alt="" fill className={styles.imgBase} />
          <Image src="/ui/header/button-tokenomics-hover.png" alt="" fill className={styles.imgHover} />
        </a>

        <a href="#roadmap" className={`${styles.btn} ${styles.roadmap}`} aria-label="Roadmap">
          <Image src="/ui/header/button-roadmap.png" alt="" fill className={styles.imgBase} />
          <Image src="/ui/header/button-roadmap-hover.png" alt="" fill className={styles.imgHover} />
        </a>
      </div>
    </nav>
  );
}
