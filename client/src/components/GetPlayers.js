import React from 'react';
import axios from 'axios';

class GetPlayers extends React.Component {
    state = {
        players: []
    };
    componentDidMount() {
    axios.get('http://localhost:5000/api/players')
        .then(res => {
            console.log(res, "response");
            this.setState({
                players: res.data
            });
        })
        .catch(err => {return "error"})
    }
    render(){
        return (
        <div className="card-container">
            {this.state.players.map(player => {
                return (
                    <div className="player-card">
                        <p>Name: {player.name}</p>
                        <p>Country: {player.country}</p>
                    </div>
                )
            })}
            
        </div>   
            
        )}
}

export default GetPlayers;