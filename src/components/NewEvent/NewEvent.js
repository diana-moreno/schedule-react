import React, { Component } from 'react';
import uuid from 'uuid';
import './NewEvent.css'

const initialState = { // se declara fuera para poder resetearlo
  event: {
    title: '',
    location: '',
    date: '',
    time: '',
    notes: '',
  },
  error: false
}

class Event extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     event: {
  //       title: '',
  //       location: '',
  //       date: '',
  //       time: '',
  //       notes: '',
  //     }
  //   }
  //   this.handleChange = this.handleChange.bind(this);
  // }
  state = {...initialState}

  // Cuando el usuario escribe en los inputs, el state toma el valor del value
  handleChange = e => { //con arrow function no se pierde el this y no hace falta bindear. (con esta forma sí hace falta: handleChange(e) {})
    console.log(e.target.name + ': ' + e.target.value);
    this.setState({
      event: {
        ...this.state.event, //hace una copia para no modificar todo
        [e.target.name] : e.target.value // sobreescribe solo el valor que cambia
      }
    })
  }

  //cuando el usuario envía el formulario
  handleSubmit = e => {
    e.preventDefault(); //evita que un texto invalido se valide
    // extraer los valores del state
    const { title, location, date, time, notes } = this.state.event;

    // validar que todos los campos se hayan rellenado
    if(title === '' | location === '' | date === '' | time === '' | notes === '') {
      this.setState({
        error: true
      })
      return // no se siga ejecutando el código si hay error
    }

    // generar objeto con los datos
    const newEvent = {...this.state.event};
    newEvent.id = uuid();

    // agregar el evento al state de App. Tiene que comunicarse con App a través de props.
    this.props.createNewEvent(newEvent)// this.state.event)

    //colocar en el state el state inicial. Resetea el estado cuando no sale un error.
    this.setState({
      ...initialState
    })
  }

  render() {

      //extraer valor del state
      const { error } = this.state;

    return (
      <div className='card mt-5 py-5'> {/*create a card with margin an padding responsible from bootstrap*/}
        <div className='card-body'>
          <h2 className='card-title text-center mb-5'>
            Add a new event
          </h2>

          { error ? <div className='alert alert-danger text-center'>All fields are required.</div> : null }

          <form onSubmit={this.handleSubmit}>

            <div className='form-group row'>
              <label className='col-sm-4 col-lg-2 col-form-label text-nowrap'> Title
              </label>
              <div className='col-sm-8 col-lg-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Title'
                  name='title'
                  onChange={this.handleChange}
                  value={this.state.event.title}
                />
              </div>
            </div>

            <div className='form-group row'>
              <label className='col-sm-4 col-lg-2 col-form-label text-nowrap'> Location
              </label>
              <div className='col-sm-8 col-lg-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Location'
                  name='location'
                  onChange={this.handleChange}
                  value={this.state.event.location}
                />
              </div>
            </div>

            <div className='form-group row'>
              <label className='col-sm-4 col-lg-2 col-form-label text-nowrap'> Date
              </label>
              <div className='col-sm-8 col-lg-4'>
                <input
                  type='date'
                  className='form-control'
                  name='date'
                  onChange={this.handleChange}
                  value={this.state.event.date}
                />
              </div>

              <label className='col-sm-4 col-lg-2 col-form-label text-nowrap'> Time
              </label>
              <div className='col-sm-8 col-lg-4'>
                <input
                  type='time'
                  className='form-control'
                  name='time'
                  onChange={this.handleChange}
                  value={this.state.event.time}
                />
              </div>
            </div>

            <div className='form-group row'>
              <label className='col-sm-4 col-lg-2 col-form-label text-nowrap'>Notes
              </label>
              <div className='col-sm-8 col-lg-10'>
                <textarea
                  type='text'
                  className='form-control'
                  placeholder='Notes'
                  name='notes'
                  onChange={this.handleChange}
                  value={this.state.event.notes}
                ></textarea>
              </div>
            </div>

            <div className='row'>
              <input
                type='submit'
                className='py-3 mt-5 col-sm-4 col-lg-4 btn btn-success mx-auto'
                value='Add event'
              />
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Event;