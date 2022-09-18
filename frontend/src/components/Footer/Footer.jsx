import React from "react";
import styles from "./Footer.module.css";
import Line from "../Line/Line";
import "../App.css";

const Footer = () => {
  return (
    <div className={`${styles.footer_wrapper} `}>
      <div className={`${styles.footer_top} flex items-center `}>
        <div className="footer-top-left">
          <div className="footer-top-left-rows flex">
            <div className={styles.row}>
              <h3 className={styles.heading}>Apna Helper</h3>

              <ul className={styles.row_items}>
                <li>Become a helper</li>
                <li>Post a job</li>
                <li>Blog</li>
                <li>Team Diary</li>
              </ul>
            </div>
            <div className={styles.row}>
              <h3 className={styles.heading}>About</h3>
              <ul className={styles.row_items}>
                <li>About us</li>
                <li>Contact us</li>
                <li>How it works</li>
                <li>Carrers</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div className={styles.row}>
              <h3 className={styles.heading}>Terms</h3>
              <ul className={styles.row_items}>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Code of Conduct</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.vertical_line}>
          <Line width="1px" height="220px" />
        </div>

        <div className={styles.footer_top_right}>
          <button className={styles.googleplaybutton}>
            <div className="flex  items-center">
              <div className={styles.googleplayimage}>
                <i class="fa-brands fa-google-play fa-lg"></i>
              </div>
              <div>
                <ul className={styles.gplaytext}>
                  <li>
                    <span className={styles.googleplaybuttontext}>
                      GET IT ON
                    </span>
                  </li>
                  <li>
                    <span className={styles.gplay}>Google Play</span>
                  </li>
                </ul>
              </div>
            </div>
          </button>
          <div className={styles.social_media_icon}>
            <span>
              <i className="fa-brands fa-youtube fa-xl"></i>
            </span>
            <span>
              <i className="fa-brands fa-instagram fa-xl"></i>{" "}
            </span>
            <span>
              <i className="fa-brands fa-facebook fa-xl"></i>{" "}
            </span>
            <span>
              <i className="fa-brands fa-twitter fa-xl"></i>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.horizontal_line}>
        <Line width="100%" height="1px" />
      </div>
      <div className={`${styles.footer_bottom}`}>
        <div className={`${styles.footer_bottom_left} flex`}>
          <div className={styles.ru}>
            <span>10,000</span>
            <span>Registered Users</span>
          </div>
          <div className={styles.ru}>
            <span>8000</span>
            <span>Helpers</span>
          </div>
        </div>

        <div
          className={`${styles.footer_bottom_right} justify-between flex items-center`}
        >
          <span>ⓒ 2022 APNA HELPER. All rights reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
