import React from 'react';

const Player = ({frined}) => {
    const {name,email} = frined;
    return (
        <div className='userStyle'>
            <h3>Name :{name}</h3>
            <p><small>Email :{email}</small></p>
        </div>
    );
};

export default Player;