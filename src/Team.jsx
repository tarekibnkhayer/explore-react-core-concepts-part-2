import { useState } from "react"

export default function Team (){
    const [team, setTeam] = useState(11);
    const handleAdd = () => {
        setTeam(team + 1);
    };
    const handleRemove = () => {
        setTeam(team - 1);
    };
    const handleReset = () => {
        setTeam(11);
    };
    const teamStyle = {
        border: '2px solid purple',
        borderRadius: '15px',
        margin: '15px',
        padding: '15px',
    }
    return (
        <div style={teamStyle}>
            <h3>Player: {team}</h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>
            <button onClick={handleReset}>Reset Player</button>
        </div>
    )
}