import React, { useState } from 'react';

function CreateEvent({onAddEvent}) {
    const [eventName, setEventName] = useState("")
    const [headliner, setHeadliner] = useState("")
    const [eventVenue, setEventVenue] = useState("")
    const [capacity, setCapacity] = useState("")
    const [price, setPrice] = useState("")
    const [eventDate, setEventDate] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        const adjustedDate = adjustDateForTimezone(eventDate);

        fetch("http://localhost:9292/events", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                event_name: eventName,
                headliner: headliner,
                event_venue: eventVenue,
                capacity: capacity,
                price: price,
                event_date: adjustedDate,
            }),
        })
        .then(r => r.json())
        .then(data => onAddEvent(data))
        setEventName("")
        setEventVenue("")
        setCapacity("")
        setPrice("")
        setEventDate("")
    }

    function adjustDateForTimezone(dateString) {
        const date = new Date(dateString);
        const timezoneOffsetInMs = date.getTimezoneOffset() * 60 * 1000;
        const adjustedTimestamp = date.getTime() + timezoneOffsetInMs;
        return new Date(adjustedTimestamp).toISOString();
      }

    return (
        <form className='new-event-form' onSubmit={handleSubmit}>
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
            <input className='new-event-form-child' type="submit"/>
        </form>
    )
}

export default CreateEvent;