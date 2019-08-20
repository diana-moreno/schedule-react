import React from 'react';
import Event from '../Event/Event';
import PropTypes from 'prop-types';


const EventsList = ({events, deleteEvent}) => (
  <div className='card py-5'>
    <div className='card-body'>
      <h2 className='card-title text-center mb-5'>Manage your events here</h2>
      <div className='events-list'>
        {events.map(event => (
          <Event
            key={event.id}
            event={event}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    </div>
  </div>
)

EventsList.propTypes = {
  events : PropTypes.array.isRequired,
  deleteEvent : PropTypes.func.isRequired
}

export default EventsList