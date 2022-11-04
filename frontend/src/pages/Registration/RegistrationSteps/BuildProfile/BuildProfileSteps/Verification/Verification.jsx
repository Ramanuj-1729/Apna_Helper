import React from 'react'
import PrimaryButton from '../../../../../../components/shared/PrimaryButton/PrimaryButton'
import styles from './Verification.module.css'
import { useNavigate } from "react-router-dom";


const Verification = () => {
    const Navigation = useNavigate();
    const step4Navigation = () => {
        Navigation("/register/finish");

    }
    return (
        <>
            <div className='flex direction-col justify-center items-center'>
                <div className={`${styles.head} flex direction-col justify-center items-center`}>
                    <h3>OTP verification</h3>
                    <span>Enter the OTP sent to +91 2332323232</span>

                </div>
                <div className={`${styles.input} flex  justiyf-center items-center`}>
                    <input type="number" />
                    <input type="number" />
                    <input type="number" />
                    <input type="number" />
                </div>
                <div className='flex'>
                    <span>Didnt recieve OTP ?</span>
                    <div className={styles.color}>
                        <span>RESEND</span>
                    </div>        </div>
                <PrimaryButton content="Verify" backgroundColor="#425E5E" padding="6px 80px"
                    boxShadow="0px 8px 25px 2px rgba(66, 94, 94, 0.25)"
                  onClick={step4Navigation}

                ></PrimaryButton>
            </div>
        </>
    )
}

export default Verification