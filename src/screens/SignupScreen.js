import React, { useRef } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import "./SignupScreen.css";
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom';

function SignupScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error.code);
                alert(error.message);
            });
    };

    const signIn = (e) => {
        e.preventDefault();
        // Handle sign-in functionality
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((userCredential) => {
            // Sign-in successful
            const user = userCredential.user;
            console.log(user);
            // Redirect to a different page upon successful sign-in
            navigate('/');
          })
          .catch((error) => {
            // Sign-in error
            console.log(error.code);
            alert(error.message);
          });
    };

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button type="submit" onClick={signIn}>
                    Sign In
                </button>
                <h4>
                    <span className="signupScreen_grey">New to Netflix? </span>
                    <span className="signupScreen_link" onClick={register}>
                        Sign Up now.
                    </span>
                </h4>
            </form>
        </div>
    );
}

export default SignupScreen;
