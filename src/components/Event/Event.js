import React from 'react';


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
          onClick={deleteEvent}
        >Delete event</button>
      </div>
    </div>
  </div>
);

export default Event;