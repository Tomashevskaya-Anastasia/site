// app/components/FooterMogga.tsx
import styles from './FooterMogga.module.css';

type Props = {
  ca?: string;
  dexscreenerUrl?: string;
  xUrl?: string;
  arenaUrl?: string;
  year?: number;

  /** НЕОБЯЗАТЕЛЬНО: управляемые отступы прямо из JSX */
  rowGap?: string;        // расстояние между CA и блоком соцкнопок (по умолчанию 40px)
  socialGap?: string;     // расстояние между соцкнопками (32px)
  vGap?: string;          // вертикальный зазор между верхним рядом и строкой © (12px)
  copyGap?: string;       // между значком © и текстом (10px)
  copyTextML?: string;    // доп. отступ слева у "MOGGA 2025" (0px)

  /** НЕОБЯЗАТЕЛЬНО: размеры/позиции костей */
  bonesLeftW?: string;
  bonesRightW?: string;
  bonesLeftX?: string;    // смещение слева (px или %)
  bonesRightX?: string;   // смещение справа
  bonesLeftB?: string;    // отступ снизу
  bonesRightB?: string;   // отступ снизу

  /** НЕОБЯЗАТЕЛЬНО: размеры CA-плашки */
  caMinWidth?: string;    // min-width CA (310px)
  caPadding?: string;     // padding CA (10px 20px)
};

export default function FooterMogga({
  ca = '095368508280593',
  dexscreenerUrl = '#',
  xUrl = '#',
  arenaUrl = '#',
  year = 2025,

  rowGap, socialGap, vGap, copyGap, copyTextML,
  bonesLeftW, bonesRightW, bonesLeftX, bonesRightX, bonesLeftB, bonesRightB,
  caMinWidth, caPadding,
}: Props) {
  const cssVars: React.CSSProperties = {
    ...(rowGap ? { ['--row-gap' as any]: rowGap } : {}),
    ...(socialGap ? { ['--social-gap' as any]: socialGap } : {}),
    ...(vGap ? { ['--v-gap' as any]: vGap } : {}),
    ...(copyGap ? { ['--copy-gap' as any]: copyGap } : {}),
    ...(copyTextML ? { ['--copy-text-ml' as any]: copyTextML } : {}),
    ...(bonesLeftW ? { ['--bones-left-w' as any]: bonesLeftW } : {}),
    ...(bonesRightW ? { ['--bones-right-w' as any]: bonesRightW } : {}),
    ...(bonesLeftX ? { ['--bones-left-x' as any]: bonesLeftX } : {}),
    ...(bonesRightX ? { ['--bones-right-x' as any]: bonesRightX } : {}),
    ...(bonesLeftB ? { ['--bones-left-b' as any]: bonesLeftB } : {}),
    ...(bonesRightB ? { ['--bones-right-b' as any]: bonesRightB } : {}),
    ...(caMinWidth ? { ['--ca-min' as any]: caMinWidth } : {}),
    ...(caPadding ? { ['--ca-pad' as any]: caPadding } : {}),
  };

  return (
    <footer className={styles.footer} style={cssVars} aria-label="Footer">
      {/* декор — кости (всегда видимы на планшетах) */}
      <img src="/ui/footer/bones.png"  alt="" className={styles.bonesLeft}  draggable={false} />
      <img src="/ui/footer/bones2.png" alt="" className={styles.bonesRight} draggable={false} />

      <div className={styles.inner}>
        <div className={styles.row}>
          {/* CA pill */}
          <div className={styles.caPill} aria-label="Contract address">
            <span className={styles.caText}>CA: {ca}</span>
          </div>

          {/* соц-иконки */}
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
        </div>

        {/* © MOGGA 2025 */}
        <div className={styles.copyRow}>
          <img src="/ui/footer/c-icon.svg" alt="©" className={styles.copyIcon} />
          <span className={styles.copyText}>MOGGA {year}</span>
        </div>
      </div>
    </footer>
  );
}
