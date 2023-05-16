import React, { useState } from 'react';

function CreateEvent() {
    const [eventName, setEventName] = useState("")
    const [headliner, setHeadliner] = useState("")
    const [eventVenue, setEventVenue] = useState("")
    const [capacity, setCapacity] = useState("")
    const [price, setPrice] = useState("")
    const [eventDate, setEventDate] = useState("")

    return (
        <form className='new-event-form'>
            <h4 className='new-event-form-child'>Event Name</h4>
            <input
                className='new-event-form-child'
                type='text'
                placeholder='Event Name'
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
            />
            <br/>
            <h4 className='new-event-form-child'>Event Venue</h4>
            <input
                className='new-event-form-child'
                type='text'
                placeholder='Event Venue'
                value={eventVenue}
                onChange={(e) => setEventVenue(e.target.value)}
            />
            <br/>
            <h4 className='new-event-form-child'>Event Date</h4>
            <input
                className='new-event-form-child'
                type='date'
                placeholder='Event Date'
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
            />
            <br/>
            <h4 className='new-event-form-child'>Headliner</h4>
            <input
                className='new-event-form-child'
                type='text'
                placeholder='Headliner'
                value={headliner}
                onChange={(e) => setHeadliner(e.target.value)}
            />
            <br/>
            <h4 className='new-event-form-child'>Venue Capacity</h4>
            <input
                className='new-event-form-child'
                type='text'
                placeholder='Capacity'
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
            />
            <br/>
            <h4 className='new-event-form-child'>Ticket Price</h4>
            <input
                className='new-event-form-child'
                type='text'
                placeholder='Ticket Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
        </form>
    )
}

export default CreateEvent;