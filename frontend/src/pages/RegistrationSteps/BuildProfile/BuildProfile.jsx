import React from 'react'
import Form from '../../../components/Form/Form'
import RegisterationStatusBar from '../../../components/RegistrationStatusBar/RegistrationStatusBar';
// import styles from './BuildProfile.module.css'

const BuildProfile = () => {
    return (
        <>
            <RegisterationStatusBar state={3} />
            <Form heading="Build Profile" text="Don't worry this can be changed later">

            </Form>
        </>
    )
}

export default BuildProfile