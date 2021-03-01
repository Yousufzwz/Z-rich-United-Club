import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const PlayerDetails = (props) => {
    const { player_name, salary,images,current_club } = props.eachPlayer;
    const handleAddPlayer = props.handleAddPlayer;
    const playerCardStyle = {
        border: '10px solid gray',
        margin: '20px',
        padding: '10px' 
    }
    return (
        <div style={playerCardStyle}>
            <h5>Player Name: <h2>{player_name}</h2> </h5>
            <img src={images} alt="" width="200px" />
            <h4>Current Club: {current_club} </h4>
            <h4>Salary: ${salary}</h4>
            <button className="btn btn-success"  onClick={() => handleAddPlayer(props.eachPlayer)}><FontAwesomeIcon icon={faUserPlus} /> add players</button>
        </div>
    );
};

export default PlayerDetails;