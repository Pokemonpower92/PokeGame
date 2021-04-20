import React, { Component } from 'react'
import PokeDex from './PokeDex';

const getHand = (handSize, pokemon) => {
    let hand  = [];

    for(let i = 0; i < handSize; i++){
        hand.push(pokemon[Math.floor(Math.random() * pokemon.length)]);
    }

    return hand;
}

const calcScore = (hand) => {
    let score = 0;

    for(let pokemon of hand){
        score += pokemon.exp;
    }

    return score;
}

class PokeGame extends Component {
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
    render () {
        const {pokemon, handSize} = this.props;
        const handOne = getHand(handSize, pokemon);
        const handTwo = getHand(handSize, pokemon);
        const scoreOne = calcScore(handOne);
        const scoreTwo = calcScore(handTwo);
        const draw = scoreOne === scoreTwo;

        return(
            <div className="PokeGame">
                <PokeDex 
                    pokemon={handOne}
                    score={scoreOne}
                    winner={scoreOne > scoreTwo}
                    draw={draw}
                />
                <PokeDex 
                    pokemon={handTwo}
                    score={scoreTwo}
                    winner={scoreTwo > scoreOne}
                    draw={draw}
                />
            </div>
        )
    }
}

export default PokeGame;