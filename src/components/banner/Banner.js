// This is a React component for a banner in Next.js
import styles from './Banner.module.css'; // Import the CSS module for styling

const Banner = () => {
  return (
    <div className={styles.banner}>
      <p className={styles.quote}>"These are the most thoughtfully designed sneakers on the market."</p>
      <div className={styles.logos}>
        <span className={styles.vogue}>VOGUE</span>
        <span className={styles.esquire}>esquire</span>
        <span className={styles.hony}>HUMANS OF NEW YORK</span>
      </div>
    </div>
  );
};

export default Banner;
