import React from 'react'
import PrimaryButton from '../../../../../../components/shared/PrimaryButton/PrimaryButton'
import styles from './MobileNumber.module.css'
import { useNavigate } from "react-router-dom";
import Input from '../../../../../../components/shared/Input/Input';

const MobileNumber = () => {
  const Navigation = useNavigate();
  const step3Navigation = () => {
    Navigation("/register/build-profile/verification");

  }
  return (
    <>
      <div className='flex direction-col justify-center items-center'>
        <div className={styles.head}>
          <h3>Enter phone number</h3>
        </div>
        <span>select your country & phone number</span>
        <Input name="phone-number" type="tel" iconClasses="fa-solid fa-phone" label="Phone Number" />
        <PrimaryButton content="Generate OTP" backgroundColor="#425E5E" padding="6px 80px"
          boxShadow="0px 8px 25px 2px rgba(66, 94, 94, 0.25)"
          onClick={step3Navigation}>
        </PrimaryButton>
      </div>
    </>
  )
}

export default MobileNumber