import React from 'react'
import Line from '../../../../components/shared/Line/Line'
import PrimaryButton from '../../../../components/shared/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../../../components/shared/SecondaryButton/SecondaryButton'
import styles from './Title.module.css'
import Input from '../../../../components/shared/Input/Input';
import { useNavigate } from "react-router-dom";


const Title = () => {
    const Navigation = useNavigate();
    const postTitle = () => {
        Navigation('/post-job/description')
    }
    return (
        <>
            <div className={`${styles.wrapper} flex`}>
                <div>
                    <div className={styles.head}>
                        <h3>1/4 Title</h3>
                        <h2>Choose a Title that relates to your job post</h2>
                    </div>

                    <span>this helps your job post stand out to the right candidate</span>
                </div>
                <div className={styles.line}>
                    <Line height="300px" width="2px" backgroundColor="#E2E2E2" ></Line>
                </div>
                <div className={styles.right}>
                    <Input type="text" label="Write Job Title" name="job_title" />
                    {/* <input type="text" label="Write Job Title" /> */}
                    <h4>Example Titles</h4>
                    <ul>
                        <li>House painting and cleaning</li>
                        <li>Deliver two household items in the same city</li>
                        <li>Tow car to near garage</li>
                    </ul>
                    <div className={styles.button}>
                        <SecondaryButton content="Cancel" border="1px solid" padding="6px 50px" boxShadow="0px 12px 25px rgba(66, 94, 94, 0.25)"></SecondaryButton>
                        <PrimaryButton content="Next" backgroundColor="#425E5E" padding="6px 50px" onClick={postTitle}></PrimaryButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Title