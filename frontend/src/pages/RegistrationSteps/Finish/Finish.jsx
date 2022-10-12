import React from 'react';
import Form from '../../../components/Form/Form'
import RegisterationStatusBar from '../../../components/RegistrationStatusBar/RegistrationStatusBar';import styles from './Finish.module.css';

const Finish = () => {
    return (
        <>
            <RegisterationStatusBar state={4} />
            <Form heading="Finish" text="Don't worry this can be changed later">

            </Form>
        </>
    );
}

export default Finish;