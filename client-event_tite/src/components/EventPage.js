import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EventPage() {
    const [eventPage, setEventPage] = useState([])
    const { id } = useParams()

    const {event_name, event_venue, headliner, capacity, event_date, price} = eventPage

    useEffect(() => {
        fetch(`http://localhost:9292/events/${id}`)
            .then(r => r.json())
            .then(data => 
                // console.log(data))
                setEventPage(data))
    }, [id])

    if(!eventPage) return <h2>Loading...</h2>    

    return (
        <div>
            <h1>EVENT NAME: {event_name}</h1>
            <h2>EVENT VENUE: {event_venue}</h2>
            <h3>HEADLINER: {headliner}</h3>
            <h4>CAPACITY: {capacity}</h4>
            <h5>EVENT DATE: {new Date(event_date).toLocaleDateString()}</h5>
            <h6>TICKET PRICE: {price}</h6>
        </div>
    )
}

export default EventPage;