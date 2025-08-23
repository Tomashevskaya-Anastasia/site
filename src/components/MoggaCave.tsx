'use client';
import styles from './MoggaCave.module.css';

export default function MoggaCave() {
  return (
    <section id="about" className={styles.wrap} aria-label="Mogga roadmap cave">
      <img className={styles.art} src="/ui/about/about-art.png" alt="" draggable={false} />
      <div className={styles.stage}>
        <h3 className={`${styles.tag} ${styles.strong}`}>MOGGA STRONG</h3>
        <h3 className={`${styles.tag} ${styles.dumb}`}>MOGGA DUMB</h3>
        <h3 className={`${styles.tag} ${styles.buy}`}>MOGGA BUY</h3>
        <h3 className={`${styles.tag} ${styles.hold}`}>MOGGA HOLD</h3>
        <h3 className={`${styles.tag} ${styles.rich}`}>MOGGA RICH</h3>
      </div>
    </section>
  );
}
