import React, {Component} from 'react'
import Pokecard from "./Pokecard";
class Pokedex  extends Component{
    render() {
        return(
            <div>
            <h1>I'm pokedex</h1>
            <Pokecard/>
            </div>
        )
    }
}

export default Pokedex;