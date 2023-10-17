import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
//import './LoginForm.css';
import { Button, TextField } from '@mui/material'

function Login({ emailInputRef, handleLogin }) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <Grid container justifyContent="center" alignItems="center" justifyItems="center">
            <Grid item xs={12} sm={6} md={4}>
                <h2>Login</h2>
                <form className='login-box'>
                    <Grid container spacing={5} justifyContent="center" alignItems="center" >
                        <Grid item xs={12} sm={8} md={8} lg={6} >
                            <TextField
                                label="Email"
                                type="text"
                                id="email"
                                name="email"
                                inputRef={emailInputRef}
                                autoFocus
                                variant="outlined"
                            //fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sm={8} md={8} lg={6} >
                            <TextField
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                variant="outlined"
                            //fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" onClick={handleLogin} fullWidth>Login</Button>
                        </Grid>
                    </Grid>



                </form>
           </Grid>
           </Grid>
    );
}

export default Login;