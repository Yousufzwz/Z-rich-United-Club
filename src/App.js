
import './App.css';
import data from './data/data.json'
import PlayerDetails from './Components/PlayerDetails/PlayerDetails';
import { useEffect, useState } from 'react';
import NewTeam from './Components/PlayerDetails/NewTeam/NewTeam';
import { Container, Navbar } from 'react-bootstrap';

function App() {
  const [players, setPlayers] = useState([]);
  const [teamPlayer, setTeamPlayer] = useState([]);

  useEffect(() => {
    setPlayers(data);
  }, [])

  const handleAddPlayer = (eachPlayer) => {
    const newTeamPlayer = [...teamPlayer, eachPlayer];
    setTeamPlayer(newTeamPlayer);
  }
  return (
    <div className="App">
      <Navbar expand="lg" variant="light" bg="light">
  <Container>
    <Navbar.Brand href="#" ><h2>Welcome to a New Club</h2></Navbar.Brand>
  </Container>
</Navbar>
      <h1>Zürich United Club</h1>
        <h4>Total Players: {players.length}</h4>
        <h3>Players Added For NewTeam: {teamPlayer.length}</h3>
      <NewTeam teamPlayer={teamPlayer}></NewTeam>
        <ol>
          {
            players.map(eachPlayer => <PlayerDetails eachPlayer={eachPlayer} handleAddPlayer={handleAddPlayer} id={eachPlayer.id}></PlayerDetails> )
          }
        </ol>
    </div>
  );
}

export default App;
