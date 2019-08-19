import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import Event from './components/Event';

class App extends Component {
  state = {
    events: []
  }

  // esta función se crea para pasar datos del hijo al padre, ya que normalmente los datos se pasan del padre al hijo
  createNewEvent = elems => {
    //console.log(elems)

    //en el state no se puede hacer push, así que se hace una copia del objeto, se modifica y después se sustituye el state por el nuevo state
    const events = [...this.state.events, elems];  // lo que ya hubiera en el array .concat(elems)

    // cambiar el estado sustituyendo el valor del state por el nuevo
    this.setState({
      events //como se llaman igual, le pasamos solo uno
    })
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
