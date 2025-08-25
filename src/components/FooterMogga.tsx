/* eslint-disable @next/next/no-img-element */
// app/components/FooterMogga.tsx
import styles from './FooterMogga.module.css';

type Props = {
  ca?: string;
  dexscreenerUrl?: string;
  xUrl?: string;
  arenaUrl?: string;
  year?: number;

  // НЕОБЯЗАТЕЛЬНО: управляемые отступы прямо из JSX
  rowGap?: string;
  socialGap?: string;
  vGap?: string;
  copyGap?: string;
  copyTextML?: string;

  // НЕОБЯЗАТЕЛЬНО: размеры/позиции костей
  bonesLeftW?: string;
  bonesRightW?: string;
  bonesLeftX?: string;
  bonesRightX?: string;
  bonesLeftB?: string;
  bonesRightB?: string;

  // НЕОБЯЗАТЕЛЬНО: размеры CA-плашки
  caMinWidth?: string;
  caPadding?: string;
};

// Разрешаем писать style c произвольными CSS-переменными вида `--...`
type CSSVars = React.CSSProperties & Record<`--${string}`, string | number>;

export default function FooterMogga({
  ca = '0x0000000000000',
  dexscreenerUrl = '#',
  xUrl = '#',
  arenaUrl = '#',
  year = 2025,

  rowGap, socialGap, vGap, copyGap, copyTextML,
  bonesLeftW, bonesRightW, bonesLeftX, bonesRightX, bonesLeftB, bonesRightB,
  caMinWidth, caPadding,
}: Props) {
  const cssVars: CSSVars = {
    ...(rowGap ?      { ['--row-gap']: rowGap } : {}),
    ...(socialGap ?   { ['--social-gap']: socialGap } : {}),
    ...(vGap ?        { ['--v-gap']: vGap } : {}),
    ...(copyGap ?     { ['--copy-gap']: copyGap } : {}),
    ...(copyTextML ?  { ['--copy-text-ml']: copyTextML } : {}),

    ...(bonesLeftW ?  { ['--bones-left-w']: bonesLeftW } : {}),
    ...(bonesRightW ? { ['--bones-right-w']: bonesRightW } : {}),
    ...(bonesLeftX ?  { ['--bones-left-x']: bonesLeftX } : {}),
    ...(bonesRightX ? { ['--bones-right-x']: bonesRightX } : {}),
    ...(bonesLeftB ?  { ['--bones-left-b']: bonesLeftB } : {}),
    ...(bonesRightB ? { ['--bones-right-b']: bonesRightB } : {}),

    ...(caMinWidth ?  { ['--ca-min']: caMinWidth } : {}),
    ...(caPadding ?   { ['--ca-pad']: caPadding } : {}),
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
