import React from 'react'
import styles from "./LogIn.module.css"
import Form from '../../components/Form/Form'
import Line from '../../components/shared/Line/Line'
import PrimaryButton from '../../components/shared/PrimaryButton/PrimaryButton'

const LogIn = () => {
  return (
    <div className="flex items-center justify-center">
      <Form heading="Log In" text="welcome back, Please LogIn to your account">
        <div className={`${styles.ga_button} flex items-center justify-center`}>
          <button className="flex items-center justify-center">
            <img src="images/google-logo.png" alt="" />
            <span>Log in with Google</span>
          </button>
          <div className={styles.darkButton}>
            <button className=" flex items-center justify-center">
              <img src="images/apple-logo.png" alt="" />
              <span>Log in with Apple</span>
            </button>
          </div>
        </div>
        <div className="flex">
          <div className={styles.line1}>
            <Line width="80px" height="1px" backgroundColor="#C2C2D6" />
          </div>
          <span> or Log in with </span>

          <div className={styles.line2}>
            <Line width="80px" height="1px" />
          </div>
        </div>

        <div className={`${styles.fill} flex direction-col`}>
          <input
            id="place"
            type="text"
            className={styles.fname}
            name=" email"
            placeholder="Email Address"
          />
          <input
            id="place"
            className={styles.lname}
            type="text"
            name="Password"
            placeholder="Password"
          />
        </div>
        <div className={styles.line3}>
          <Line width="580px" height="1px" />
        </div>

        <div className={`${styles.signButton} flex`}>
          <PrimaryButton
            content="Log In"
            backgroundColor="#425E5E"
            padding="4px 252px"
            boxShadow="0px 8px 25px 2px rgba(66, 94, 94, 0.25)"
          />
        </div>

        <div>
          <input type="checkbox" />
          remeber me
        </div>

        <div className={styles.bottomButton}>
          <span>new to apna helper ? </span>
          <button>sign up here</button>
        </div>
      </Form>
    </div>
  );
}

export default LogIn