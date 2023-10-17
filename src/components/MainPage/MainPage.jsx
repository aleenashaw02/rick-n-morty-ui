import React, { useRef } from 'react';
import Login from '../../views/LoginForm/LoginForm';
import { useAuth } from '../../service/AuthContext';
import RickAndMortyComponent from '../RickAndMortyComponent/RickAndMortyComponent';


function MainPage() {
    const { isLoggedIn, login } = useAuth();
    const emailInputRef = useRef(null);

    const handleLogin = () => {
        const email = emailInputRef.current.value;
        const password = document.getElementById('password').value;

        if (email.trim() === '' || password.trim() === '') {
            alert('Please fill in both email and password fields.');
            return;
        }

        else if (!email.includes('@')) {
            alert('Enter Email of the form example@example.com.');
            return;
        }

        else if (password.length < 7) {
            alert('Password should be at least 7 characters long.');
            return;
        }
       
            alert('Login successful!');
            login();
        


    };

    return (
        <div className="main-page">
            {isLoggedIn ? <RickAndMortyComponent /> : <Login emailInputRef={emailInputRef} handleLogin={handleLogin} />}
        </div>
    );
}

export default MainPage;
