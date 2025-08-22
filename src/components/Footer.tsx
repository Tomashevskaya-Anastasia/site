'use client';

import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      {/* декоративные «кости» */}
      <Image
        src="/ui/footer/bones.png"
        alt=""
        width={260}
        height={170}
        priority
        className={styles.bonesLeft}
      />
      <Image
        src="/ui/footer/bones2.png"
        alt=""
        width={260}
        height={174}
        priority
        className={styles.bonesRight}
      />

      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={`${styles.caBox} ${styles.btnStatic}`}>
            <span className={styles.caLabel}>CA: 09538508280593</span>
          </div>

          <nav className={styles.socials} aria-label="Social links">
            <a
              className={styles.socialBtn}
              href="https://dexscreener.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="DexScreener"
            >
              <span className={`${styles.icon} ${styles.icDex}`} />
            </a>

            <a
              className={styles.socialBtn}
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
            >
              <span className={`${styles.icon} ${styles.icX}`} />
            </a>

            <a
              className={styles.socialBtn}
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="Arena"
            >
              <span className={`${styles.icon} ${styles.icArena}`} />
            </a>
          </nav>
        </div>

        <div className={styles.bottomRow}>
          <span className={styles.copy} aria-hidden="true">©</span>
          <span className={styles.brand}>Mogga 2025</span>
        </div>
      </div>
    </footer>
  );
}
