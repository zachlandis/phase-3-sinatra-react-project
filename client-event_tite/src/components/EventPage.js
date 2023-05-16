import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EventPage({events}) {
    // const [eventPage, setEventPage] = useState([])
    // const { id } = useParams()

    // const {event_name} = eventPage

    // useEffect(() => {
    //     fetch(`http://localhost:3000/events/${id}`)
    //         .then(r => r.json())
    //         .then(data => setEventPage(data))
    // }, [id])

    const {event_name} = events

    return (
        <h1>{event_name}</h1>
    )
}

export default EventPage;