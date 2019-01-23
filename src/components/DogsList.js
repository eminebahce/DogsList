import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class DogsList extends Component{

    renderBreeds = (breed) => {
        return <li key={breed}>
        <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
        </li>
    }

    render(){
        const {dogbreeds} = this.props;
        return(
            <div className="dogs-list">
            <h1>Dogs List</h1>
            {!dogbreeds === null && 'Loading...'}
            {
                dogbreeds &&
                <ul>{dogbreeds.map(this.renderBreeds)}</ul>
            }
            
            </div>
        )
    }
}