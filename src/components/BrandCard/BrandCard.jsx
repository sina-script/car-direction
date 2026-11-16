import styles from "./BrandCard.module.css";

 function BrandCard({country,brand,step,img}) {
  return (
    <article className={styles.card} data-origin="italian">
      <div className={styles.shimmerEffect}></div>

      <div className={styles.cardTop}>
        <span className={styles.idx}>{step}</span>
        <span className={styles.origin}>{country}</span>
      </div>

      <div className={styles.logoArea}>
        <div className={styles.ringAnim}></div>
        <img 
          src={img} 
          alt="Brand Image" 
        />
      </div>

      <div className={styles.details}>
        <h2>{brand}</h2>
        <div className={styles.line}></div>
      </div>
    </article>
  );
}

export default BrandCard;
