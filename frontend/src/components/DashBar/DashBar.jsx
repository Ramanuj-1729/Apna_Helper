import React from 'react'
import Form from '../shared/Form/Form'
import styles from './Dashbar.module.css'
const DashBar = () => {
  return (
    <>
    <div className='flex justify-center items-center'>
        <Form>
            <div className={styles.buttons}>
            <span>
              <i class="fa-solid fa-grid-2"></i>
              Dashboard
            </span>
            
            <span>
              <i class="fa-solid fa-user"></i>
              Profile
            </span>
            <span>
              <i class="fa-solid fa-envelope-circle-check"></i>
              My Posts
            </span>
            <span>
              <i class="fa-solid fa-briefcase"></i>
              My Work
            </span>
            <span>
              <i class="fa-solid fa-money-check-dollar"></i>
              Billings
            </span>
            </div>
        </Form>
    </div>
    </>
  )
}

export default DashBar