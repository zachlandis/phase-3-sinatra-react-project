import React, { useState } from 'react'

function EventForm() {
    const [eventName, setEventName] = useState("")
    const [eventVenue, setEventVenue] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [capacity, setCapacity] = useState("")
    const [headliner, setHeadliner] = useState("")


    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Event Name'
                    value={eventName}
                    onChange={e => setEventName(e.target.value)}
                >
                </input>
                <input
                    type='text'
                    placeholder='Event Venue'
                    value={eventVenue}
                    onChange={e => setEventVenue(e.target.value)}
                >
                </input>
                <input
                    type='text'
                    placeholder='Headliner'
                    value={headliner}
                    onChange={e => setHeadliner(e.target.value)}
                >
                </input>
                <input
                    type='date'
                    value={eventDate}
                    onChange={e => setEventDate(e.target.value)}
                >
                </input>
                <input
                    type='number'
                    placeholder='Event Capacity'
                    value={capacity}
                    onChange={e => setCapacity(e.target.value)}
                >
                </input>
                <input type="submit" />
            </form>
        </div>
    )
}


export default EventForm;