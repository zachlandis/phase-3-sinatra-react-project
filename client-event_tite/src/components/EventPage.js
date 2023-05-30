import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CreateTicket from './CreateTicket';

function EventPage({events, onDeleteTicket, onUpdateTicket, onAddTicket}) {
    const [eventPage, setEventPage] = useState([])
    const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false)
    const [isCreateFormVisible, setIsCreateFormVisible] = useState(false)
    const [updatedTicket, setUpdatedTicket] = useState({
        ticket_number: '',
        ticket_holder: '',
        ticket_price: '',
        event_id: '',
        ticket_id: '',
    })

    const { id } = useParams()

    const {event_name, event_venue, headliner, capacity, event_date, price} = eventPage

    useEffect(() => {
        const idNum = parseInt(id)
        const foundEvent = events.find(e => e.id === idNum)
        if (!eventPage.id && foundEvent) {
            setEventPage(foundEvent);
          }
    }, [events])
    

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

    function handleDelete(ticket) {
        fetch(`http://localhost:9292/events/${ticket.event_id}/tickets/${ticket.id}`, {
            method: 'DELETE',
        })
            // .then(r => r.json())
            .then(onDeleteTicket(ticket))
    }

    //// PATCH FORM ///////
    
    
    function handleVisibleForm(event_id, ticket_id) {
        setIsUpdateFormVisible(!isUpdateFormVisible)
        setUpdatedTicket({
            event_id: event_id,
            ticket_id: ticket_id,
        })   
    }

    function handleUpdateFormSubmit(e) {
        e.preventDefault();
       
        const correctedTicket = {
            ticket_number: updatedTicket.ticket_number,
            ticket_holder: updatedTicket.ticket_holder,
            ticket_price: updatedTicket.ticket_price,
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

            setIsUpdateFormVisible(false);
            setUpdatedTicket(correctedTicket)
    }

    if(!eventPage.event_name) return <h2>Loading...</h2>    

    return (
        <div>
            <div>
               <table>
                    <thead>
                        <tr>
                            <th>EVENT NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>{event_name}</tr>
                    </tbody>

                </table>
                <table>
                    <thead>
                        <tr>
                            <th>Event Venue</th>
                            <th>Event Date</th>
                            <th>Headliner</th>
                            <th>Capacity</th>
                            <th>Ticket Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{event_venue}</td>
                            <td>{new Date(event_date).toLocaleDateString()}</td>
                            <td>{headliner}</td>
                            <td>{capacity}</td>
                            <td>{price}</td>
                        </tr>
                    </tbody>
                </table>




                <button onClick={() => setIsCreateFormVisible(!isCreateFormVisible)}>CREATE TICKET:</button>
                {isCreateFormVisible ? <CreateTicket onAddTicket={onAddTicket} /> : null}
            <h6>TICKETS SOLD:</h6> 
            {isUpdateFormVisible && (
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
                <div key={ticket.id}>
                    <li>{ticket.ticket_number} - {ticket.ticket_holder} - 
                    <button onClick={() => handleDelete(ticket)}>DELETE TICKET</button> - 
                    <button onClick={() => handleVisibleForm(ticket.event_id, ticket.id)}>UPDATE TICKET</button></li>
                </div>
            ))
           }
            </div>
            
        </div>
    )
    
}

export default EventPage;