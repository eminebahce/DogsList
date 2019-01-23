import React, { Component } from 'react';
import './App.css';
import DogsListContainer from '../src/components/DogsListContainer';
import {Route} from 'react-router-dom';
import DogBreedImages from '../src/components/DogBreedImages';
import DogBreedImagesContainer from '../src/components/DogBreedImagesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/" component={DogsListContainer} />
      <Route path="/dog-breeds/:breed" component={DogBreedImages} />
      <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
      </div>
    );
  }
}

export default App;
