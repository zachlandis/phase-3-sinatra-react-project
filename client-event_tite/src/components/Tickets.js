import React, { useState } from 'react';

function Tickets({tickets, onDeleteTicket, onUpdateTicket}) {
    const [updatedTicketId, setUpdatedTicketId] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false)
    const [updatedTicket, setUpdatedTicket] = useState({
        ticket_number: '',
        ticket_holder: '',
        price: ''
    })

    function handleDelete(id) {
        fetch(`http://localhost:9292/tickets/${id}`, {
            method: 'DELETE',
        })
            .then(r => r.json())
            .then(data => onDeleteTicket(data))
    }

    function handleUpdate(id) {
        setUpdatedTicket(id);
        setIsFormVisible(true);
        setUpdatedTicket({
            ticket_number: '',
            ticket_holder: '',
            price: ''
        })
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setUpdatedTicket((prevTicket) => ({
            ...prevTicket,
            [name]: value,
        }))
    }

    function handleUpdateFormSubmit(e) {
        e.preventDefault();

        const updatedEvent = {
            ticket_number: updatedTicket.ticket_number,
            ticket_holder: updatedTicket.ticket_holder,
            price: updatedTicket.price
        }

        fetch(`http://localhost:9292/tickets/${updatedTicketId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedEvent)
        })
            .then(r => r.json())
            .then(data => onUpdateTicket(data))


    }
    
    return (
        <div>
            <div>
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
                        name="price"
                        value={updatedTicket.price}
                        onChange={handleInputChange}
                />
                </label>
                <br/>
                <button type="submit">Update Ticket</button>
            </form>
                )}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Ticket Number</th>
                        <th>Ticket Holder</th>
                        <th>Event</th>
                        <th>Ticket Price</th>
                        <th>Delete Ticket</th>
                        <th>Update Ticket</th>
                    </tr>
                </thead>
                <tbody>
                {tickets.map((ticket) => {
                    return (
                        <tr key={ticket.id}>
                            <td>{ticket.ticket_number}</td>
                            <td>{ticket.ticket_holder}</td>
                            <td>{ticket.event.event_name}</td>
                            <td>{ticket.event.price}</td>
                            <td><button onClick={() => handleDelete(ticket.id)}>DELETE TICKET</button></td>
                            <td><button onClick={() => handleUpdate(ticket.id)}>UPDATE TICKET</button></td>
                        </tr>
                        )}
                )}
                </tbody>
            </table>
        </div>
    )
}
export default Tickets;