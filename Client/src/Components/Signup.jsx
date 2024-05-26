import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../config';
import '../ComponentsCss/Signup.css';

function Signup() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        contact: '',
        age: '',
        gender: ''
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const submitHandler = async (e) => {
        const requiredFields = ['firstname', 'lastname', 'email', 'password', 'age', 'gender'];
        const emptyFields = requiredFields.filter(field => !userInfo[field]);

        if (emptyFields.length > 0) {
            toast.error('All fields are compulsory to fill');
            return;
        }

        e.preventDefault();

        const formData = new FormData();
        formData.append("firstname", userInfo.firstname);
        formData.append("lastname", userInfo.lastname);
        formData.append("age", userInfo.age);
        formData.append("gender", userInfo.gender);
        formData.append("email", userInfo.email);
        formData.append("password", userInfo.password);
        formData.append("contact", userInfo.contact);

        try {
            const response = await axios.post(`${BASE_URL}/api/register`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            toast.success('Registration successful!', {
                position: 'top-right',
                autoClose: 3000,
            });

            setTimeout(() => {
                navigate('/Login');
            }, 3000);
        } catch (error) {
            console.error('Error during registration:', error);
            toast.error('Please fill out all required details');
        }
    };

    return (
        <>
            <div className='register-page'>
                <div className="register-box">
                    <h2 style={{ textAlign: 'center' }}>CREATE AN ACCOUNT</h2>
                    <input type="text" onChange={changeHandler} placeholder='First Name' className='name' value={userInfo.firstname} name='firstname' required />
                    <input type="text" onChange={changeHandler} placeholder='Last Name ' className='name' value={userInfo.lastname} name='lastname' required />
                    <input type="text" onChange={changeHandler} placeholder='Age ' className='name' value={userInfo.age} name='age' required />
                    <select id="" required className='name1' onChange={changeHandler} value={userInfo.gender} name='gender' >
                        <option value="" disabled>Select Your Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="text" onChange={changeHandler} required placeholder='Email' value={userInfo.email} name='email' />
                    <input type="text" onChange={changeHandler} required placeholder='Password' value={userInfo.password} name='password' />
                    <input type="text" onChange={changeHandler} required placeholder='Contact Number' value={userInfo.contact} name='contact' />
                    <input type="submit" onClick={submitHandler} className='rsubmit' />
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}

export default Signup;
