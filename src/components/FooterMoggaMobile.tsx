// app/components/FooterMoggaMobile.tsx
import styles from './FooterMoggaMobile.module.css';

type Props = {
  ca?: string;
  dexscreenerUrl?: string;
  xUrl?: string;
  arenaUrl?: string;
  year?: number;
};

export default function FooterMoggaMobile({
  ca = '09538508280593',
  dexscreenerUrl = '#',
  xUrl = '#',
  arenaUrl = '#',
  year = 2025,
}: Props) {
  return (
    <footer className={styles.footer} aria-label="Footer (mobile)">
      {/* кости */}
      <img src="/ui/footer/bones.png"  alt="" className={styles.bonesLeft}  draggable={false} />
      <img src="/ui/footer/bones2.png" alt="" className={styles.bonesRight} draggable={false} />

      {/* соцсети */}
      <nav className={styles.socials} aria-label="Social links">
        <a className={styles.socialBtn} href={dexscreenerUrl} target="_blank" rel="noopener noreferrer" aria-label="Dexscreener">
          <span className={`${styles.icon} ${styles.icDex}`} aria-hidden="true" />
        </a>
        <a className={styles.socialBtn} href={xUrl} target="_blank" rel="noopener noreferrer" aria-label="X">
          <span className={`${styles.icon} ${styles.icX}`} aria-hidden="true" />
        </a>
        <a className={styles.socialBtn} href={arenaUrl} target="_blank" rel="noopener noreferrer" aria-label="Arena">
          <span className={`${styles.icon} ${styles.icArena}`} aria-hidden="true" />
        </a>
      </nav>

      {/* CA строка */}
      <div className={styles.caLine} aria-label="Contract address">
        <span className={styles.caText}>
          <span className={styles.caLabel}>CA:&nbsp;</span>
          <span className={styles.caValue}>{ca}</span>
        </span>
      </div>

      {/* © MOGGA 2025 */}
      <div className={styles.copyRow}>
        <img src="/ui/footer/c-icon.svg" alt="©" className={styles.copyIcon} />
        <span className={styles.copyText}>MOGGA {year}</span>
      </div>
    </footer>
  );
}
