import React from 'react';
import styles from './Input.module.css';

const Input = ({ name, type, iconClasses, label }) => {
    return (
        <>
            <div className={`${styles.input_wrapper} flex items-center justify-center`}>
                <input type={type} name={name} required/>
                <i className={iconClasses}></i>
                <label htmlFor={name} >{label}</label>
            </div>
        </>
    );
}

export default Input;