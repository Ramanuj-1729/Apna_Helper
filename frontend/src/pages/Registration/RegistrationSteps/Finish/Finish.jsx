import React from 'react';
import Form from '../../../../components/shared/Form/Form';
import PrimaryButton from '../../../../components/shared/PrimaryButton/PrimaryButton';
import styles from './Finish.module.css'
const Finish = () => {
    return (
        <>
           <div className='flex justify-center items-center direction-col'>
                <Form >
                    <img src="/images/finish-1.png" alt="no" />
                    <div className={`${styles.head} flex justify-center items-center direction-col`}>
                        <h3>Great !</h3>
                        <span>now you are ready to hire your first helper</span>
                        <PrimaryButton content="Finish" backgroundColor="#00FFCC" padding="6px 80px"
                            boxShadow="0px 8px 25px 2px rgba(66, 94, 94, 0.25)"
                        // onClick={step4Navigation}

                        ></PrimaryButton> 
                    </div>
                    
                </Form>
           </div>
        </>
    );
}

export default Finish;