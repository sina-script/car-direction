import styles from "./NoBrand.module.css";

export default function NoBrand() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.emptyState}>
        {/* افکت‌های نوری پس‌زمینه */}
        <div className={styles.glowReflect}></div>
        
        <div className={styles.visualContainer}>
          <div className={styles.mainOrbit}>
            <div className={styles.scanner}></div>
            <div className={styles.core}>
              <div className={styles.corePulse}></div>
              <div className={styles.emblem}>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className={styles.satellite}></div>
        </div>

        <div className={styles.textFrame}>
          <div className={styles.badge}>SYSTEM IDLE</div>
          <h2 className={styles.heroTitle}>
            SELECT A <span className={styles.rubyText}>COUNTRY</span>
          </h2>
          <p className={styles.subText}>
            The automotive database is ready. Please select a country from the menu to initialize the archive.
          </p>
        </div>

        <div className={styles.loaderLine}>
          <div className={styles.progress}></div>
        </div>
      </div>
    </div>
  );
}
