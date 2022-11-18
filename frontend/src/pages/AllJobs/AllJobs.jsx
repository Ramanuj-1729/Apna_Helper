import React from 'react'
import Form from '../../components/shared/Form/Form'
import Line from '../../components/shared/Line/Line'
import PrimaryButton from '../../components/shared/PrimaryButton/PrimaryButton'
import styles from './AllJobs.module.css'

const AllJobs = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <Form>
                    <h2>Jobs For You</h2>
                    <Line height="1px" width="820px" backgroundColor="#E2E2E2"></Line>
                    <div className='flex'>
                        <div className={styles.head}>
                            <h3>Deliver 2 household items in the same city</h3>
                        </div>                        <div className={styles.price}>
                            <h3>$300 - $500</h3>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <p>I need a helper who can deliver my two chairs to my shop. Shop is 5 km away from my house. Helper can take shop address from me.</p>
                    </div>
                    <h3>Lavish, 142, Geeta Colony, New Delhi, Delhi, 471003, India</h3>
                    <h3>+91 9125467892</h3>
<div className={styles.button}>
                        <PrimaryButton content="Select Job" backgroundColor="#425E5E" padding="4px 40px"></PrimaryButton>
</div>                </Form>
            </div>
        </>
    )
}

export default AllJobs