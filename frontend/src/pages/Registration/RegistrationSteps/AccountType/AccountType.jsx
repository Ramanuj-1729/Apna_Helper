import React from 'react'
import Form from '../../../../components/shared/Form/Form'
import PrimaryButton from '../../../../components/shared/PrimaryButton/PrimaryButton';
import styles from './AccountType.module.css';
import { useNavigate } from "react-router-dom";

const AccountType = () => {
  const Navigation = useNavigate();
  const buildProfileNavigation = () => {
    Navigation("/register/build-profile");
  };

  return (
    <>
      <div className={`${styles.wrapper} flex items-center justify-center`}>
        <Form heading="Select Account Type" text="Don't worry this can be changed later">

          <div className={styles.btn}>
            <div className={styles.btn1}>
              <PrimaryButton backgroundColor="var(--gray-dark-color)" content="Become a Helper" padding="30px 110px" boxShadow="0 0 10px rgba(0, 204, 153, 0.2)" border="1px solid #425E5E" fontSize="26px" onClick={buildProfileNavigation} />
            </div>
            <div className={styles.btn2}>
              <PrimaryButton backgroundColor="var(--gray-dark-color)" content="Hire a Helper" padding="30px 138px" boxShadow="0 0 10px rgba(0, 204, 153, 0.2)" border="1px solid #425E5E" fontSize="26px" />
            </div>
          </div>
        </Form>
      </div>
      <div className={styles.waves}>
        <img src="/images/wave-top.png" alt="oh no" />
      </div>
    </>

  )
}

export default AccountType