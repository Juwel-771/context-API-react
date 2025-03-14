import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
    const {user} = useContext(UserContext);

    if(!user) return <div>Please login</div>

    return (
        <div>
            <h3>Welcome {user.username}</h3>
            <p>Your master password {user.password} </p>
        </div>
    );
};

export default Profile;