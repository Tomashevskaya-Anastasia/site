'use client';
import { useState } from 'react';
import styles from './HeroMogga.module.css';

export default function HeroMogga() {
  const [copied, setCopied] = useState(false);
  const CA = '0x0094025'; // подставь реальный контракт

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(CA);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* noop */ }
  };

  return (
    <section id="home" className={styles.hero} aria-label="Mogga hero">
      {/* Десктоп/мобайл фон через <picture> */}
      <picture>
        {/* Фон для телефонов */}
        <source
          media="(max-width: 559.98px)"
          srcSet="/ui/hero/mobile-home-art.png"
        />
        {/* Фон по умолчанию (планшеты/десктоп) */}
        <img
          className={styles.art}
          src="/ui/hero/mammot-hero.png"
          alt="Mammoth on a stone throne"
          draggable={false}
        />
      </picture>

      {/* Плавающая панель поверх фона */}
      <div className={styles.panel}>
        <h1 className={styles.title}>MOGGA</h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>

        <div className={styles.caRow}>
          {/* CA — пассивная (как бейдж) */}
          <div className={`${styles.btn} ${styles.btnCA} ${styles.btnStatic}`} aria-hidden="true">
            <span className={styles.btnLabel}>CA: {CA}</span>
          </div>
          {/* COPY — активная */}
          <button
            type="button"
            className={`${styles.btn} ${styles.btnCopy}`}
            onClick={onCopy}
            aria-live="polite"
          >
            <span className={styles.btnLabel}>{copied ? 'COPIED' : 'COPY'}</span>
          </button>
        </div>

        {/* Соц-панель: на телефонах скрыта, на планшетах/десктопе останется */}
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
      </div>
    </section>
  );
}
