import styles from "./BrandCard.module.css";

export default function BrandCard() {
  return (
    <article className={styles.card} data-origin="italian">
      <div className={styles.shimmerEffect}></div>

      <div className={styles.cardTop}>
        <span className={styles.idx}>02</span>
        <span className={styles.origin}>ITALY</span>
      </div>

      <div className={styles.logoArea}>
        <div className={styles.ringAnim}></div>
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Ferrari-Logo.svg/800px-Ferrari-Logo.svg.png" 
          alt="Ferrari" 
        />
      </div>

      <div className={styles.details}>
        <h2>FERRARI</h2>
        <div className={styles.line}></div>
        <p>MARANELLO ORIGIN</p>
      </div>
    </article>
  );
}
