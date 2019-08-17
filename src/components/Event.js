import React, { Component } from 'react';

class Todo extends Component {
  state = {

  }
  render() {
    return (
      <div className='card mt-5 py-5'> {/*create a card with margin an padding responsible from bootstrap*/}
        <div className='card-body'>
          <h2 className='card-title text-center mb-5'>
            Add a new event
          </h2>
          <form>

            <div className='form-group row'>
              <label className='col-sm-4 col-lg-2 col-form-label'> Event title
              </label>
              <div className='col-sm-8 col-lg-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Title'
                  name='title'
                />
              </div>
            </div>

            <div className='form-group row'>
              <label className='col-sm-4 col-lg-2 col-form-label'> Location
              </label>
              <div className='col-sm-8 col-lg-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Location'
                  name='location'
                />
              </div>
            </div>

            <div className='form-group row'>
              <label className='col-sm-4 col-lg-2 col-form-label'> Date
              </label>
              <div className='col-sm-8 col-lg-4'>
                <input
                  type='date'
                  className='form-control'
                  name='date'
                />
              </div>

              <label className='col-sm-4 col-lg-2 col-form-label'> Time
              </label>
              <div className='col-sm-8 col-lg-4'>
                <input
                  type='time'
                  className='form-control'
                  name='time'
                />
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Todo;