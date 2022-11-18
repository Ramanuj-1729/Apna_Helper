import React from 'react';
import styles from './DefaultAddress.module.css';
import PrimaryButton from '../../../../../../components/shared/PrimaryButton/PrimaryButton';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Input from '../../../../../../components/shared/Input/Input';
import profileData from '../profileData';


const DefaultAddress = () => {
  const [defaultAddress, setDefaultAddress] = useState({
    fullName: "",
    phoneNumber: "",
    pinCode: "",
    houseNumber: "",
    area: "",
    landmark: ""
  })

  const Navigation = useNavigate();
  const uploadDefaultAddress = () => {
    Navigation("/register/build-profile/finish");
  }

  const handleDefaultAddress = () => {
    profileData.defaultAddress = defaultAddress;
  }
  return (
    <>
      <div>
        <h2>Enter Your Address</h2>
        <span>This will be your default address, you can also add more addresses later</span>
        <Input name="full_name" type="text" label="Full name" onChange={handleDefaultAddress} />
        <Input name="phone_number" type="text" label="Phone Number" onChange={handleDefaultAddress} />
        <Input name="pincode" type="text" label="Pincode" onChange={handleDefaultAddress} />
        <Input name="house_number" type="text" label="House Number / Building" onChange={handleDefaultAddress} />
        <Input name="area" type="text" label="Area / Street" onChange={handleDefaultAddress} />
        <Input name="state" type="text" label="State" onChange={handleDefaultAddress} />
        <Input name="landmark" type="text" label="Landmark (Optional)" onChange={handleDefaultAddress} />
        <PrimaryButton content="Add Address" padding="10px 250px" backgroundColor="#425E5E" fontsize="24px" onClick={uploadDefaultAddress}></PrimaryButton>
      </div>
    </>
  )
}

export default DefaultAddress;