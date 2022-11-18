import React from 'react'
import Form from '../../components/shared/Form/Form'
import { Outlet } from 'react-router-dom'
import styles from './PostJob.module.css';


const PostJob = () => {
  return (
    <>
      <div className={`${styles.wrapper} flex direction-col justify-center items-center`}>
        <Form heading="Post Your Job" text="Post your job and hire helper in just 4 steps">
          <Outlet></Outlet>
        </Form>
      </div>
    </>
  )
}

export default PostJob