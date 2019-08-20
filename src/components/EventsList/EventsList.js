import React from 'react';
import Event from '../Event/Event';
import PropTypes from 'prop-types';


const EventsList = ({events, deleteEvent}) => {
  const message = Object.keys(events).length === 0 ? 'There are no events'
                                                   : 'Manage your events here'

  return (
    <div className='card py-5'>
      <div className='card-body'>
        <h2 className='card-title text-center mb-5'>{message}</h2>
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
}

EventsList.propTypes = {
  events : PropTypes.array.isRequired,
  deleteEvent : PropTypes.func.isRequired
}

export default EventsList