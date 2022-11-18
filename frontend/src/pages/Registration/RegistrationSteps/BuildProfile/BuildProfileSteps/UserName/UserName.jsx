import React, { useState } from 'react';
import PrimaryButton from '../../../../../../components/shared/PrimaryButton/PrimaryButton';
import { useNavigate } from "react-router-dom";
import profileData from '../profileData';
import Input from '../../../../../../components/shared/Input/Input';

const UserName = () => {
  const [username, setUsername] = useState('');

  const Navigation = useNavigate();

  const handleUserName = (e) => {
    setUsername(e.target.value);
  }

  const uploadUserName = () => {
    Navigation("/register/build-profile/profile-picture");
    profileData.userName = username;
  }
  return (
    <>
      <div className='flex items-center justify-center direction-col'>
        <h2>choose a username</h2>
        <span>choose one unique username</span>
        <Input name="username" iconClasses="fa-solid fa-user" type="text" onChange={handleUserName} label="Username" />
        <PrimaryButton content="next" padding="6px 90px" backgroundColor="#425E5E" onClick={uploadUserName} ></PrimaryButton>
      </div>

    </>
  )
}

export default UserName;