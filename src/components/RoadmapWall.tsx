'use client';
import styles from './RoadmapWall.module.css';

export default function RoadmapWall() {
  return (
    <section id="roadmap" className={styles.wrap} aria-label="Roadmap wall">
      {/* источник фона: мобильный для телефонов, десктоп — по умолчанию */}
      <picture className={styles.picture}>
        {/* WebP для телефонов (опц.) */}
        <source
          media="(max-width: 0px)"
          type="image/webp"
          srcSet="/ui/roadmap/roadmap-art-mobile.webp, /ui/roadmap/roadmap-art-mobile@2x.webp 2x"
        />
        {/* PNG/JPG для телефонов */}
        <source
          media="(max-width: 560px)"
          srcSet="/ui/roadmap/mobile-roadmap-art-two.png, /ui/roadmap/mobile-roadmap-art.png"
        />
        {/* fallback для планшетов/десктопов */}
        <img
          className={styles.art}
          src="/ui/roadmap/roadmap-art.png"
          alt=""
          draggable={false}
        />
      </picture>

      <div className={styles.stage}>
        <h2 className={styles.title}>ROADMAP</h2>
      </div>
    </section>
  );
}
