import React from "react";
import styles from "./OurPrinciples.module.css";

const OurPrinciples = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <h1>Our Principles</h1>
      <div className="flex">
        <div className={styles.left}>
          <h2>Heaven of talent at your doorstep</h2>

          <h3>The best for every budget</h3>
          <span>
            Find high-quality services at every price point. No hourly rates,
          </span>
          <span>just work based pricing.</span>

          <h3>Quality work done quickly</h3>
          <span>
            Find the right helper to get your work done within minutes.
          </span>

          <h3>Protected payments, every tiime</h3>
          <span>
            Always know what you'll pay upfront. Pay when your work is done.
          </span>

          <h3>24/7 Support</h3>
          <span>
            Questions? Our round-the-clock support team is available to help
            anytime, anywhere.
          </span>
        </div>

        <div className={`${styles.right} flex direction-col`}>
          <img src="images/principle-img-1.png" alt="img" />
          <img src="images/principle-img-2.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default OurPrinciples;
