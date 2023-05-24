import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function EventPage({events, onDeleteTicket, onUpdateTicket}) {
    const [eventPage, setEventPage] = useState([])
    const [isFormVisible, setIsFormVisible] = useState(false)
    const [updatedTicket, setUpdatedTicket] = useState({
    ticket_number: '',
    ticket_holder: '',
    ticket_price: '',
    event_id: '',
    ticket_id: '',
    })
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

    function handleInputChange(e) {
        const { name, value } = e.target;
        setUpdatedTicket((prevTicket) => ({
            ...prevTicket,
            [name]: value,
        }))
        console.log(updatedTicket)
    }

    //// DESTROY FETCH ///////

    function handleDelete(event_id, ticket_id) {
        fetch(`http://localhost:9292/events/${event_id}/tickets/${ticket_id}`, {
            method: 'DELETE',
        })
            .then(r => r.json())
            .then(data => onDeleteTicket(data))
    }

    //// PATCH FORM ///////
    
    
    function handleVisibleForm(event_id, ticket_id) {
        setIsFormVisible(true)
        setUpdatedTicket({
            event_id: event_id,
            ticket_id: ticket_id,
        })   
    }

    function handleUpdateFormSubmit(e) {
        e.preventDefault();
        
        // const event_id = updatedTicket.event_id;
        // const ticket_id = updatedTicket.id;
       
        const correctedTicket = {
            ticket_number: updatedTicket.ticket_number,
            ticket_holder: updatedTicket.ticket_holder,
            ticket_price: updatedTicket.ticket_price,
            // event_id: updatedTicket.event_id,
            // ticket_id: updatedTicket.ticket_id
        }

        fetch(`http://localhost:9292/events/${updatedTicket.event_id}/tickets/${updatedTicket.ticket_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ticket_number: updatedTicket.ticket_number,
                ticket_holder: updatedTicket.ticket_holder,
                ticket_price: updatedTicket.ticket_price
            })
        })
            .then(r => r.json())
            .then(data => onUpdateTicket(data));

            setIsFormVisible(false);
            setUpdatedTicket(correctedTicket)
    }

    if(!eventPage.event_name) return <h2>Loading...</h2>    

    return (
        <div>
            <div>
            <h1>EVENT NAME: {event_name}</h1>
            <h2>EVENT VENUE: {event_venue}</h2>
            <h3>HEADLINER: {headliner}</h3>
            <h4>CAPACITY: {capacity}</h4>
            <h5>EVENT DATE: {new Date(event_date).toLocaleDateString()}</h5>
            <h6>TICKET PRICE: {currencyFormat(price)}</h6>
            <h6>TICKETS SOLD:</h6>
            {isFormVisible && (
                <form onSubmit={handleUpdateFormSubmit}>
                <label>
                Ticket Number:
                    <input
                        type="text"
                        name="ticket_number"
                        value={updatedTicket.ticket_number}
                        onChange={handleInputChange}
                />
                </label>
                <br/>
                <label>
                Ticket Holder:
                    <input
                        type="text"
                        name="ticket_holder"
                        value={updatedTicket.ticket_holder}
                        onChange={handleInputChange}
                />
                </label>
                <br/>
                <label>
                Ticket Price:
                    <input
                        type="price"
                        name="ticket_price"
                        value={updatedTicket.ticket_price}
                        onChange={handleInputChange}
                />
                </label>
                <br/>
                <label>
                Event ID:
                    <input
                        type="text"
                        name="event_id"
                        value={updatedTicket.event_id}
                />
                </label>
                <br/>
                <label>
                Ticket ID:
                    <input
                        type="text"
                        name="ticket_id"
                        value={updatedTicket.ticket_id}
                />
                </label>
                <br/>
                <button type="submit">Update Ticket</button>
            </form>
                )}
                <br/>
            {eventPage.tickets.map((ticket) => (
                <div>
                    <li key={ticket.id}>{ticket.ticket_number} - {ticket.ticket_holder} - 
                    <button onClick={() => handleDelete(ticket.event_id, ticket.id)}>DELETE TICKET</button> - 
                    <button onClick={() => handleVisibleForm(ticket.event_id, ticket.id)}>UPDATE TICKET</button></li>
                </div>
            ))
           }
            </div>
            
        </div>
    )
    
}

export default EventPage;