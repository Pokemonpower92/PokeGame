import React, { Component } from 'react';
import PokeCard from "./PokeCard";
import './PokeDex.css';

class PokeDex extends Component {
    static defaultProps = {
        pokemon: [
            {name: "Bulbasaur", number: 1, type: "Grass", exp: 1},
            {name: "Ivysaur", number: 2, type: "Grass", exp: 2},
            {name: "Venasaur", number: 3, type: "Grass", exp: 3},
            {name: "Charmander", number: 4, type: "Fire", exp: 1},
            {name: "Charmeleon", number: 5, type: "Fire", exp: 2},
            {name: "Charazard", number: 6, type: "Fire", exp: 3},
            {name: "Squirtle", number: 7, type: "Water", exp: 1},
            {name: "Wartortle", number: 8, type: "Water", exp: 2},
            {name: "Blastoise", number: 9, type: "Water", exp: 3}
        ]
    };

    render(){
        const { pokemon, score, winner, draw} = this.props;
        let hurah;

        if(winner) {
            hurah = <div className="PokeDex-winner">
                        <h1>Winner!</h1>
                        <h2>Total EXP: {score}</h2>
                    </div>
        } else {
            hurah = <div className="PokeDex-loser">
                        <h1>Loser!</h1>
                        <h2>Total EXP: {score}</h2>
                    </div>
        }

        if(draw) {
            hurah = <div className="PokeDex-winner">
                        <h1>Draw!</h1>
                        <h2>Total EXP: {score}</h2>
                    </div>
        }

        return(
            <div className="PokeDex">
                {hurah}
                <div className="PokeDex-cards">
                    {pokemon.map(p => (
                        <PokeCard
                            name={p.name}
                            number={p.number}
                            type={p.type}
                            exp={p.exp}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default PokeDex;