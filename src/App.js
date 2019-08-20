import React, { Component } from 'react';
// import './bootstrap.min.css'; // https://bootswatch.com/
// import './index.css';
import Header from './components/Header/Header';
import NewEvent from './components/NewEvent/NewEvent';
import EventsList from './components/EventsList/EventsList';


class App extends Component {
  state = {
    events: []
  }
  // cargar los datos almacenados al cargar la página
  componentDidMount() {
    const eventsLS = localStorage.getItem('events')
    if(eventsLS) {
      this.setState({
        events: JSON.parse(eventsLS) // lo convierte en un array de objetos
      })
    }
  }
  // almacenar los datos cuando se añaden o eliminan eventos
  componentDidUpdate() {
    localStorage.setItem('events', JSON.stringify(this.state.events));
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

  //delete events
  deleteEvent = id => {
    //console.log(id)
    //crear una copia del state
    const actualEvents = [...this.state.events];

    //utilizar filter para extraer el elemento id del array que coincida en id
    const events = actualEvents.filter(event => event.id !== id)

    //actualizar el state
    this.setState({
      events
    })
  };


  render() {
    return (
      <div className='container-fluid'>
        <Header
          title='My Personal Schedule'
        />
        <div className='d-flex flex-wrap'>

          <div className='col-md-4 mx-auto'>
            <NewEvent
              createNewEvent={this.createNewEvent}
            />

          </div>

          <div className='mt-5 col-md-6 mx-auto'>
            <EventsList
              events={this.state.events}
              deleteEvent={this.deleteEvent}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
