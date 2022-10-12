import React from 'react'
import Form from '../Form/Form'
import RegisterationSteps from '../RegisterationSteps/RegisterationSteps'
import styles from './AccountType.module.css'

const AccountType = () => {
   
  return (
    
    <>
    <RegisterationSteps state={1}></RegisterationSteps>
        <Form heading="Select Account Type" text="Don't worry this can be changed later">

        </Form>
    </>
   
  )
}

export default AccountType