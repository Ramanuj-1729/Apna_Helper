import React from 'react'
import Form from '../../components/shared/Form/Form'
const ReviewPost = () => {
  return (
    <>
      <div className='flex items-center justify-center'>
        <Form heading="Review your job post" text="check everything looks good">
          <h3>Title</h3>
          <input type="text" />
          <h3>Describe</h3>
          <input type="text" />
          <h3>Budget</h3>
          <input type="text" />
          <h3>Address</h3>
          <input type="text" />


        </Form>
      </div>
    </>
  )
}

export default ReviewPost