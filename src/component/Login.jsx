import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const {setUser} = useContext(UserContext)

    const handleUsername = e => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    const handlePassword = e => {
        e.preventDefault(); 
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

    return (
        <div>
           <h2>Login</h2>
           <input type="text" value={username} onChange={handleUsername} name="userName" id="" /> 
            <br />
            <input type="password" value={password} onChange={handlePassword} name="password" id="" />
            <br />
            <input onClick={handleSubmit} type="submit" value="Submit" />
        </div>
    );
};

export default Login;