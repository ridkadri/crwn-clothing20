import React, {useState} from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import {signUpStart} from '../../redux/user/user.actions';

import './sign-up.scss';

const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const register = e => {
        e.preventDefault();
        
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }


    const handleSubmit = async e => {
        e.preventDefault();
        
        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, {displayName})

            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

        } catch(error) {
            console.error(error);
        }
    };


    return (
        <div className='register'>
            
        <div className='register_container'>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <h5>Display Name</h5>
                <input 
                    type='text' 
                    value={displayName} 
                    onChange={(e)=>setDisplayName(e.target.value)}
                    label='Display Name'
                    required
                />

                <h5>Email</h5>
                <input 
                    type='email' 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                    label='Email'
                    required
                />

                <h5>Password</h5>
                <input 
                    type='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    label='Password'
                    required
                />

                <h5>Confirm Password</h5>
                <input 
                    type='password'
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    label='Confirm Password'
                    required
                />

                <CustomButton
                    type='submit'
                    onClick={register}>
                    Register
                </CustomButton>

                <p> By registering you agree to the CRWN Clothing Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

            </form>
        </div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
