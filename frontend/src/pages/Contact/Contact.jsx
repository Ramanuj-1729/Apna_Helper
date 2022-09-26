import React from "react";
import style from './Contact.module.css';

const Contact = () => {
  return (
    <div className={style.wrapper}>
      <div className="flex items-center justify-center">
        <h1>Contact Us</h1>
      </div>
      <h3 className="flex items-center justify-center">
        Any questions or remarks ? Just write us a message
      </h3>

      <div className="flex">
        <div>
          <img src="images/Contact-img-1.png" alt="" />
        </div>
        <div className={style.form}>
          <form action="">
            <div className="">
              <div className="suryansh abhi contact us mai chanes kr rha hai mai registeration">
                <span className="">{/* <i className=""></i> */}</span>
                <input
                  className=""
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="">
                <span className="">
                  <i className=""></i>
                </span>
                <input
                  className=""
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="">
                <span className="">
                  <i className="fa-solid fa-comments"></i>
                </span>
                <textarea
                //   ref="images/contact-img-2.png"    ye wli dalni hia asati
                  className=""
                  name="message"
                  cols="40"
                  rows="6"
                  placeholder="Message"
                >
                  {/* <img src="images/contact-img-2.png" alt="" /> */}
                </textarea>
              </div>
            </div>
            <div className="">
              {/* <PrimaryButton width="44" height="12" buttonName="Send Message" /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
