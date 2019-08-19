import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import Event from './components/Event';

class App extends Component {
  state = {

  }

  // esta función se crea para pasar datos del hijo al padre, ya que normalmente los datos se pasan del padre al hijo
  createNewEvent = elem => {
    console.log(elem)
  }

  render() {
    return (
      <div className='container'>
        <Header
          title='My personal schedule'
        />
        <div className='row'>
          <div className='col-md-10 mx-auto'>
            <Event
              createNewEvent={this.createNewEvent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
