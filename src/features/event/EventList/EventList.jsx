import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
    render() {
        const { events, selectEvent, deleteEvent } = this.props;
        return (
            <Fragment>
            {events.map(item => (
                <EventListItem key={item.id} event={item} selectEvent={selectEvent} deleteEvent={deleteEvent}/>               
            ))}
                
            </Fragment>
        )
    }
}

export default EventList