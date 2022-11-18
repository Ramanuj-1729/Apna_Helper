import React from 'react'
import styles from './Address.module.css'
import Line from '../../../../components/shared/Line/Line'
import PrimaryButton from '../../../../components/shared/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../../../components/shared/SecondaryButton/SecondaryButton'
import { useNavigate } from "react-router-dom";


const Address = () => {
    const Navigation = useNavigate();
    const postAddress = () => {
        Navigation('/');
    }
    return (
        <>
            <div className={`${styles.wrapper} flex`}>
                <div>
                    <div className={styles.head}>
                        <h3>4/4 Address</h3>
                        <h2>Choose your workspace address</h2>
                    </div>

                    <span>this will let your helper know where the workspace is</span>
                </div>
                <div className={styles.line}>
                    <Line height="300px" width="2px" backgroundColor="#E2E2E2" ></Line>
                </div>
                <div className={styles.right}>
                    <input type="text" label="Write Job Title" />
                    <h4>Example Titles</h4>
                    <ul>
                        <li>House painting and cleaning</li>
                        <li>Deliver two household items in the same city</li>
                        <li>Tow car to near garage</li>
                    </ul>
                    <div className={styles.button}>
                        <SecondaryButton content="back" border="1px solid" padding="6px 50px" boxShadow="0px 12px 25px rgba(66, 94, 94, 0.25)"></SecondaryButton>
                        <PrimaryButton content="Next" backgroundColor="#425E5E" padding="6px 50px" onClick={postAddress}></PrimaryButton>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Address