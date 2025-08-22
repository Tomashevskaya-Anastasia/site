'use client';
import styles from './RoadmapWall.module.css';

export default function RoadmapWall() {
  return (
    <section id="roadmap" className={styles.wrap} aria-label="Roadmap wall">
      {/* фон как IMG, чтобы не было кропа и «швов» */}
      <img
        className={styles.art}
        src="/ui/roadmap/roadmap-art.png"   /* положи картинку в public/ui/roadmap/ */
        alt=""
        draggable={false}
      />

      {/* слой с заголовком поверх */}
      <div className={styles.stage}>
        <h2 className={styles.title}>ROADMAP</h2>
      </div>
    </section>
  );
}
