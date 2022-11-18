import React from 'react'
import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import Form from '../../../../components/shared/Form/Form'
import styles from './BuildProfile.module.css';

const BuildProfile = () => {
    return (
        <>
            <div className='flex direction-col justify-center items-center'>
                <Form heading="Build Proflie" text="we are taking these details for communication purposes">
                    <Outlet />
                </Form>

            </div>
            <div className={styles.waves}>
                <img src="/images/wave-top.png" alt="oh no" />
            </div>


        </>
    )
}

export default BuildProfile