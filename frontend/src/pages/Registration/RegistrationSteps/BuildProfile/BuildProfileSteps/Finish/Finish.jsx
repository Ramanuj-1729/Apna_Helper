import React from 'react';
import Form from '../../../../../../components/shared/Form/Form';
import PrimaryButton from '../../../../../../components/shared/PrimaryButton/PrimaryButton';
import styles from './Finish.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import profileData from '../profileData';

const Finish = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const uploadProfileData = async (e) => {
        // const data = {
        //     username: profileData.userName,
        //     profilePicture: profileData.profilePicture,
        //     full_name: profileData.defaultAddress.fullname,
        //     phone_number: profileData.defaultAddress.phoneNumber,
        //     pincode: profileData.defaultAddress.pincode,
        //     house_number: profileData.defaultAddress.houseNumber,
        //     area: profileData.defaultAddress.area,
        //     state: profileData.defaultAddress.state,
        //     landmark: profileData.defaultAddress.landmark
        // }
        // e.preventDefault();
        // try {
        //     const url = "http://localhost:5000/api/userProfile";
        //     const { data: res } = await axios.post(url, data);
            navigate("/log-in");
        // } catch (error) {
        //     if (
        //         error.response &&
        //         error.response.status >= 400 &&
        //         error.response.status <= 500
        //     ) {
        //         setError(error.response.data.message);
        //     }
        // }
    }

    return (
        <>
            <div className={` ${styles.wrapper} flex justify-center items-center direction-col`}>
                <Form >
                    <img src="/images/finish-1.png" alt="no" />
                    <div className={`${styles.head} flex justify-center items-center direction-col`}>
                        <h3>Great !</h3>
                        <span>now you are ready to hire your first helper</span>
                        <PrimaryButton
                            content="Finish"
                            backgroundColor="#00FFCC"
                            padding="6px 80px"
                            boxShadow="0px 8px 25px 2px rgba(66, 94, 94, 0.25)"
                            onClick={uploadProfileData}
                        ></PrimaryButton>
                    </div>

                </Form>
            </div>
        </>
    );
}

export default Finish;