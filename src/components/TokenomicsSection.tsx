'use client';
import styles from './TokenomicsSection.module.css';

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className={styles.section} aria-labelledby="tokenomics-title">
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 id="tokenomics-title" className={styles.title}>Tokenomics</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>LP BURNT</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle} style={{ textAlign: 'center' }}>
              CONTRACT<br />LOCKED
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>TAX 0%</div>
          </div>

          {/* SUPPLY — плотная колонка без лишних отступов */}
          <div className={styles.card}>
            <div className={`${styles.cardTitle} ${styles.stack}`}>
              <span className={styles.kicker}>SUPPLY</span>
              <span className={styles.supplyNumber}>10 000 000 000</span>
              <span className={styles.ticker}>$MOGGA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
