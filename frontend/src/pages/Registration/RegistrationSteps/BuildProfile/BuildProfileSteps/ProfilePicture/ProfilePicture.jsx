import React from 'react'
import styles from './ProfilePicture.module.css'
import PrimaryButton from '../../../../../../components/shared/PrimaryButton/PrimaryButton'
import { useNavigate } from "react-router-dom";



const ProfilePicture = () => {
    const Navigation = useNavigate();
    const step2Navigation = () => {
        Navigation("/register/build-profile/mobile-number");
    };
    return (

        <>
            <div className='flex items-center justify-center'>
                <div className='flex direction-col items-center justify-center'>
                    <div className={styles.head}>
                        <h3>Choose a profile picture</h3>
                    </div>
                    <span>Had a favourite selfie ? upload it here</span>
                    <div className={styles.pic}>
                        <img src="/images/profile.png" alt="" />
                    </div>
                    <PrimaryButton content="Upload" backgroundColor="#425E5E" padding="6px 120px" fontSize="20px" boxShadow="0px 8px 25px 2px rgba(66, 94, 94, 0.25)" onClick={step2Navigation}></PrimaryButton>

                </div>


            </div>

        </>
    )
}

export default ProfilePicture