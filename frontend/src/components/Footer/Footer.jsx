import React from "react";
import styles from "./Footer.module.css";
import Line from "../Line/Line";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className={`${styles.footer_wrapper}`}>
            <div className={`${styles.footer_top} flex`}>
                <div className={`${styles.footer_top_left} flex`}>
                    <div className={`col-1 ${styles.col}`}>
                        <ul>
                            <NavLink to='#'><h5 className={styles.col_heading}>Apna Helper</h5></NavLink>
                            <NavLink to='#'><li>Become a helper</li></NavLink>
                            <NavLink to='#'><li>Post a job</li></NavLink>
                            <NavLink to='#'><li>Blog</li></NavLink>
                            <NavLink to='#'><li>Team Diary</li></NavLink>
                        </ul>
                    </div>

                    <div className={`col-2 ${styles.col}`}>
                        <ul>
                            <NavLink to='#'><h5 className={styles.col_heading}>About</h5></NavLink>
                            <NavLink to='#'><li>About us</li></NavLink>
                            <NavLink to='#'><li>Contact us</li></NavLink>
                            <NavLink to='#'><li>How it works</li></NavLink>
                            <NavLink to='#'><li>Carrers</li></NavLink>
                            <NavLink to='#'><li>Sitemap</li></NavLink>
                        </ul>
                    </div>

                    <div className={`col-3 ${styles.col}`}>
                        <ul className={styles.row_items}>
                            <NavLink to='#'><h5 className={styles.col_heading}>Terms</h5></NavLink>
                            <NavLink to='#'><li>Terms and Conditions</li></NavLink>
                            <NavLink to='#'><li>Privacy Policy</li></NavLink>
                            <NavLink to='#'><li>Code of Conduct</li></NavLink>
                        </ul>
                    </div>
                </div>

                <div className={styles.vertical_line}>
                    <Line width="1px" height="100%" />
                </div>

                <div className={`${styles.footer_top_right} flex items-center justify-center direction-col`}>
                    <NavLink to='#'>
                        <button className="flex items-center">
                            <i className="fa-brands fa-google-play fa-lg"></i>

                            <div className={`${styles.btn_text} flex direction-col items-center justify-center`}>
                                <span className={styles.getItOn}>
                                    GET IT ON
                                </span>
                                <span className={styles.googlePlay}>Google Play</span>
                            </div>
                        </button>
                    </NavLink>

                    <div className={styles.social_media_icon}>
                        <NavLink to='#'>
                            <span>
                                <i className="fa-brands fa-youtube fa-xl"></i>
                            </span>
                        </NavLink>

                        <NavLink to='#'>
                            <span>
                                <i className="fa-brands fa-instagram fa-xl"></i>
                            </span>
                        </NavLink>
                        <NavLink to='#'>
                            <span>
                                <i className="fa-brands fa-facebook fa-xl"></i>
                            </span>
                        </NavLink>
                        <NavLink to='#'>
                            <span>
                                <i className="fa-brands fa-twitter fa-xl"></i>
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className={styles.horizontal_line}>
                <Line width="100%" height="1px" />
            </div>

            <div className={`${styles.footer_bottom} flex`}>
                <div className={`${styles.footer_bottom_left} flex`}>
                    <div className={`${styles.registered_user} flex direction-col`}>
                        <span>10,000</span>
                        <span>Registered Users</span>
                    </div>
                    <div className="flex direction-col">
                        <span>8000</span>
                        <span>Helpers</span>
                    </div>
                </div>

                <div className={`${styles.footer_bottom_right} flex items-center justify-center`}>
                    <span>ⓒ 2022 APNA HELPER. All rights reserved</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
