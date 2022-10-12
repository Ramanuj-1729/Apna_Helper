import React from 'react'
import Form from '../../../components/Form/Form'
import RegisterationStatusBar from '../../../components/RegistrationStatusBar/RegistrationStatusBar';
// import styles from './AccountType.module.css'

const AccountType = () => {

  return (

    <>
      <RegisterationStatusBar state={2} />
      <Form heading="Select Account Type" text="Don't worry this can be changed later">
        
      </Form>
    </>

  )
}

export default AccountType