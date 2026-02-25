import React, { use } from 'react';
import Player from './Player';

const Plyers = ({friendsPromised}) => {
    const friends = use(friendsPromised);
    
    return (
        <div className='card'>
            <h3>All players:{friends.length}</h3>
            {
                friends.map(frined =><Player frined={frined}></Player>)
            }
        </div>
    );
};

export default Plyers;