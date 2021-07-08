import React from 'react';

const PlayerCard = props => {
    return (
        <div className="player-card">
            <p>{props.name}</p>
            <p>{props.country}</p>
        </div>
    )
}

export default PlayerCard;