import React from 'react'
import PrimaryButton from '../../../../../components/shared/PrimaryButton/PrimaryButton'

const DefaultAddress = () => {
  return (
    <>
    <div>
        <h2>Enter Your Address</h2>
        <span>This will be your default address, you can also add more addresses later</span>
        <input type="text" label="full name" />
        <input type="text" label="phone number"/>
              <input type="text" label="pincode" />
              <input type="text" label="house number/building bumber" />
              <input type="text" label="area / street" />
              <input type="text" label="state" />
              <input type="text" label="landmark (optional)" />
              <PrimaryButton content="Add Address" padding="4px 60px" backgroundcolor="#425E5E" fontsize="24px"></PrimaryButton>
    </div>
    </>
  )
}

export default DefaultAddress