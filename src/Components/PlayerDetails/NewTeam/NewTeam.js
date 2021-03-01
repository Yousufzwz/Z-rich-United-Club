import React from 'react';

const NewTeam = (props) => {
    const teamPlayer = props.teamPlayer;

    const totalBudget = teamPlayer.reduce( (sum, eachPlayer) => sum + eachPlayer.salary,0)
    const selectedNames = teamPlayer.reduce( (playerAdding, eachPlayer) => playerAdding + eachPlayer.player_name,[])

    return (
        
        <div>
              <h3>Total Budget: ${totalBudget}</h3>  
              <h3>Selected Players:<ul>{selectedNames}</ul> </h3>
        </div>
    );
};

export default NewTeam;