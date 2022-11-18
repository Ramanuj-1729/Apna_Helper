import React from 'react'
import PrimaryButton from '../../../../../../components/shared/PrimaryButton/PrimaryButton'

const UserName = () => {
  return (
    <>
    <div className='flex items-center justify-center direction-col'>
      <h2>choose a username</h2>
      <span>choose one unique username</span>
      <input type="text" />
        <PrimaryButton content="next" padding="2px 100px" backgroundcolor="#425E5E" ></PrimaryButton>
    </div>
    </>
  )
}

export default UserName