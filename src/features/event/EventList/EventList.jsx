import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
    render() {
        return (
            <Fragment>
            {this.props.events.map(item => (
                <EventListItem key={item.id} event={item}/>               
            ))}
                
            </Fragment>
        )
    }
}

export default EventList