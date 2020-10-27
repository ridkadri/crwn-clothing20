import React, {useState} from 'react';
import './sign-in.scss';

import CustomButton from '../../components/custom-button/custom-button';
import {signInWithGoogle} from '../../firebase/firebase.utils.js';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        setEmail('');
        setPassword('');
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email,password)
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
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <h5>Password</h5>
                <input 
                    type='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <CustomButton
                    type='submit'
                    onClick={signIn}>
                    Sign In
                </CustomButton>

                <p> By signing-in you agree to the CRWN Clothing Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                <CustomButton
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
