import React, {useState} from 'react';
import './sign-in.scss';

import CustomButton from '../../components/custom-button/custom-button';
import {signInWithGoogle} from '../../firebase/firebase.utils.js';

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''});

    const signIn = e => {
        e.preventDefault();

        setCredentials('');
    }

    const {email, password} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();

    }

    const handleChange = e => {
        const {value, name} = e.target;

        setCredentials({...userCredentials,[name]: value});
    }

    return (
        <div className='login'>
            
        <div className='login_container'>
            <h1>Sign-In</h1>

            <form onSubmit={handleSubmit}>
                <h5>E-mail</h5>
                <input 
                    type='email' 
                    value={email} 
                    handleChange={handleChange}
                />

                <h5>Password</h5>
                <input 
                    type='password'
                    value={password}
                    handleChange={handleChange}
                />

                <CustomButton
                    type='submit'
                    onClick={signIn}>
                    Sign In
                </CustomButton>

                <p> By signing-in you agree to the CRWN Clothing Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                <CustomButton
                    type='button'
                    onClick={signInWithGoogle}
                    isGoogleSignIn>
                    Sign In With Google
                </CustomButton>
            </form>
        </div>
    </div>
    )    
}

export default SignIn;
