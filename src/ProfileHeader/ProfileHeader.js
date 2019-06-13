import React from 'react';
import logo from '../lassun.svg';
import './ProfileHeader.css';


const ProfileHeader = ({name,logo2}) =>{
    return(
        <div>   
            <img alt={'logo'} className={'dp'} src={logo2} />
            <h1>{name}</h1>

        </div>
    )
};

export default ProfileHeader ;