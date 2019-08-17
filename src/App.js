import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import Event from './components/Event';

class App extends Component {
  state = {

  }
  render() {
    return (
      <div class='container'>
        <Header
          title='My personal schedule'
        />
        <div className='row'>
          <div className='col-md-10 mx-auto'>
            <Event
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
