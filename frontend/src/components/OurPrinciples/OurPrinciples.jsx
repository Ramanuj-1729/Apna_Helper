import React from "react";
import styles from "./OurPrinciples.module.css";

const OurPrinciples = () => {
  return (
    <> 
      <div
        className={`${styles.wrapper}  flex justify-center items-center direction-col`}
      >
        <h1>Our Principles</h1>
        <div className="flex justify-center items-center">
          <div className={styles.left}>
            <h3>Heaven of talent at your doorstep</h3>
            <div className={styles.left_content}>
              <h4>The best for every budget</h4>
              <p>
                Find high-quality services at every price point. No hourly
                rates,
              </p>
              <p>just work based pricing.</p>

              <h4>Quality work done quickly</h4>
              <p>Find the right helper to get your work done within minutes.</p>

              <h4>Protected payments, every time</h4>
              <p>
                Always know what you'll pay upfront. Pay when your work is done.
              </p>

              <h4>24/7 Support</h4>
              <p>
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </div>
          </div>

          <div className={`${styles.right}`}>
            {/* <img src="ima" alt="" /> */}
            <img
              className={styles.first_image}
              src="images/principle-img-1.png"
              alt="img"
            />
            <img
              className={styles.second_image}
              src="images/principle-img-2.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPrinciples;
