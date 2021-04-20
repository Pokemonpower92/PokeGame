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
        return(
            <div className="PokeDex">
                <h1>Pokedex</h1>
                <div className="PokeDex-cards">
                    {this.props.pokemon.map(p => (
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