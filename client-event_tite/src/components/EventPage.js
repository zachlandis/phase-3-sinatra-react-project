import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EventPage() {
    const [eventPage, setEventPage] = useState({ tickets: [] })
    const { id } = useParams()

    const {event_name, event_venue, headliner, capacity, event_date, price} = eventPage

    useEffect(() => {
        fetch(`http://localhost:9292/events/${id}`)
            .then(r => r.json())
            .then(data => 
                setEventPage({...data, tickets: data.tickets}))
    }, [id])

    // console.log(tickets)

    const getTickets = eventPage.tickets.map((ticket) => (
        <div>
            <li key={ticket.id}>{ticket.ticket_number} - {ticket.ticket_holder}</li>
        </div>
    ))

    const currencyFormat = (value) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value);

    if(!eventPage.event_name) return <h2>Loading...</h2>    

    return (
        <div>
            <h1>EVENT NAME: {event_name}</h1>
            <h2>EVENT VENUE: {event_venue}</h2>
            <h3>HEADLINER: {headliner}</h3>
            <h4>CAPACITY: {capacity}</h4>
            <h5>EVENT DATE: {new Date(event_date).toLocaleDateString()}</h5>
            <h6>TICKET PRICE: {currencyFormat(price)}</h6>
            <h6>TICKETS SOLD:</h6>
            <ol>
                {getTickets}
            </ol>
        </div>
    )
}

export default EventPage;