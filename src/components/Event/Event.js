import React from 'react';
import PropTypes from 'prop-types';


const Event = ({event, deleteEvent}) => (
  <div className='media'>
    <div className='media-body d-flex justify-content-between align-items-center'>
      <div className='w-75 ml-5'>
        <h4 className='mt-0'>{event.title}</h4>
        <p className='card-text'><span>Location: </span> {event.location}</p>
        <p className='card-text'><span>Date: </span> {event.date}</p>
        <p className='card-text'><span>Time: </span> {event.time}</p>
        <p className='card-text'><span>Notes: </span></p>
        <p className='card-text'>{event.notes}</p>
        </div>
      <div className='w-25 text-right mr-5'>
        <button
          className='btn btn-danger'
          onClick={() => deleteEvent(event.id)}// se necesita pasar el valor del id, para ello hay que bindear el id a través del constructor o arrow function
        >Delete event</button>
      </div>
    </div>
  </div>
);

Event.propTypes = {
  event : PropTypes.object.isRequired,
  deleteEvent : PropTypes.func.isRequired
}

export default Event;