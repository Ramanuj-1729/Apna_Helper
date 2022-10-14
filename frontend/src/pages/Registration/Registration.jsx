import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import RegistrationStatusBar from '../../components/RegistrationStatusBar/RegistrationStatusBar';

const Registration = () => {
    const Location = useLocation();
    let path = Location.pathname;

    let state = 0;

    if (path === '/register/sign-up') {
        state = 1;
    }
    else if (path === '/register/account-type') {
        state = 2;
    }
    else if (path === '/register/build-profile') {
        state = 3;
    }
    else if (path === '/register/finish') {
        state = 4;
    }

    return (
        <>
            <RegistrationStatusBar state={state} />
            <Outlet />
        </>
    );
}

export default Registration;