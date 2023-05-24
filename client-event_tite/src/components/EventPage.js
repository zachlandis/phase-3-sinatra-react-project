import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function EventPage({events, onDeleteTicket}) {
    const [eventPage, setEventPage] = useState([])
    const { id } = useParams()

    const {event_name, event_venue, headliner, capacity, event_date, price} = eventPage

    const idNum = parseInt(id)
    const foundEvent = events.find(e => e.id === idNum)

    if (!eventPage.id && foundEvent) {
        setEventPage(foundEvent);
        console.log("During State Set:", foundEvent)
      }

    const currencyFormat = (value) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value);

    function handleDelete(id) {
        fetch(`http://localhost:9292/tickets/${id}`, {
            method: 'DELETE',
        })
            .then(r => r.json())
            .then(data => onDeleteTicket(data))
    }

    function handleUpdate(id) {
        console.log(id)
    }

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
            {eventPage.tickets.map((ticket) => (
                <div>
                    <li key={ticket.id}>{ticket.ticket_number} - {ticket.ticket_holder} - 
                    <button onClick={() => handleDelete(ticket.id)}>DELETE TICKET</button> - 
                    <button onClick={() => handleUpdate(ticket.id)}>UPDATE TICKET</button></li>
                </div>
            ))
           }
                
            
        </div>
    )
}

export default EventPage;