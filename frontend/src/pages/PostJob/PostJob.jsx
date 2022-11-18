import React from 'react'
import Form from '../../components/shared/Form/Form'
import { Outlet } from 'react-router-dom'


const PostJob = () => {
  return (
    <>
          <div className='flex direction-col justify-center items-center'>
    <Form heading="Post Your Job" text="Post your job and hire helper in just 4 steps">
    <Outlet></Outlet>
    </Form>
    </div>
    </>
  )
}

export default PostJob