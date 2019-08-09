import React, {Component} from 'react'
import Pokecard from "./Pokecard";
import './Pokedex.css';
class Pokedex  extends Component{
    render() {
        return(
            <div className='tc'>
                <h1 className="Pokedex-header">I'm pokedex</h1>
                <div>
                    <Pokecard/>
                    <Pokecard/>
                    <Pokecard/>
                    <Pokecard/>
                </div>

            </div>
        )
    }
}

export default Pokedex;