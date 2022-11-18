import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import RegistrationStatusBar from '../../components/RegistrationStatusBar/RegistrationStatusBar';

const Registration = (props) => {
    props.funcNav(false);
    const Location = useLocation();
    let path = Location.pathname;

    let state = 0;

    if (path === '/register/sign-up') {
        state = 1;
    }
    else if (path === '/register/build-profile/user-name' || path === '/register/build-profile/profile-picture' || path === '/register/build-profile/address') {
        state = 2;
    }
    else if (path === '/register/finish') {
        state = 3;
    }

    return (
        <>
            <RegistrationStatusBar state={state} />
            <Outlet />
        </>
    );
}

export default Registration;