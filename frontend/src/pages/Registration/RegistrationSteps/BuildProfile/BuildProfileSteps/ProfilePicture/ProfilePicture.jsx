import React from 'react'
import styles from './ProfilePicture.module.css'
import PrimaryButton from '../../../../../../components/shared/PrimaryButton/PrimaryButton'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import profileData from '../profileData';

const ProfilePicture = () => {
    const [image, setImage] = useState('/images/profile.png');

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    }

    const Navigation = useNavigate();

    const uploadPicture = async (e) => {
        Navigation("/register/build-profile/default-address");
        profileData.ProfilePicture = image;
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
                        <label htmlFor="inputTag">
                            <img src={image} alt="" />
                            <input name='profile_picture' id="inputTag" type="file" onChange={handleImage} />
                        </label>
                    </div>
                    <PrimaryButton content="Upload" backgroundColor="#425E5E" padding="6px 120px" fontSize="20px" boxShadow="0px 8px 25px 2px rgba(66, 94, 94, 0.25)" onClick={uploadPicture}></PrimaryButton>
                </div>
            </div>
        </>
    );
}

export default ProfilePicture;