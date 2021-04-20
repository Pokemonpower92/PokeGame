import { Component } from 'react';
import './PokeCard.css'

// API for images.
const POKEAPI = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class PokeCard extends Component {


    render () {
        const getImg = (num) => {
            if(num <= 999){
                num = ("000"+num).slice(-3);
            }
            return POKEAPI + num + ".png";
        }

        const { name, number, type, exp } = this.props;
        return(
            <div className="PokeCard">
                <div className="PokeCard-title">
                <h1> {name} </h1>
                </div>
                <img 
                    src={getImg(number)}
                    alt='Pokeimage'
                    >
                </img>
                <div>Type: {type} </div>
                <div>Exp: {exp} </div>
            </div>
        )
    }
}

export default PokeCard;