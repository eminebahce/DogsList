import React, {Component} from 'react';

export default class DogsList extends Component{

    renderBreeds = (breed) => {
        return <li key={breed}>{breed}</li>
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