import React from "react";
import SecondaryButton from "../../components/shared/SecondaryButton/SecondaryButton";
import style from './Contact.module.css';

const Contact = () => {
  return (
    <div className={style.wrapper}>
      <div className="flex">
        <div className={style.left}>
          <img src="images/contact-img-5.png" alt="" />
        </div>
        <div className={style.right}>
          <div className={`${style.formWrapper}  `}>
            <h1>Contact Us</h1>
            <h3>Got any query for us ? Let us know...</h3>
            <form action="">
              <div className="">
                <div className="suryansh abhi contact us mai chanes kr rha hai mai registeration">
                  <input
                    className=""
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="">
                  
                  <input
                    className=""
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="">
                  <span className="">
                  </span>
                  <textarea
                    className=""
                    name="message"
                    cols="40"
                    rows="6"
                    placeholder="Message"
                  >
                  </textarea>
                </div>
              </div>
              <div className="">
                <SecondaryButton
                  content="send message"
                  padding="6px 30px"
                  color="#263238"
                  border="1px solid #263238"
                  borderRadius="10px"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
