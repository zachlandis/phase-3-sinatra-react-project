import React from 'react';

function Tickets({tickets, onDeleteTicket}) {

    function handleDelete(id) {

 
        fetch(`http://localhost:9292/tickets/${id}`, {
            method: 'DELETE',
        })
            .then(r => r.json())
            .then(data => onDeleteTicket(data))
    }
    
    return (
        <div>
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
                            <td><button>UPDATE TICKET</button></td>
                        </tr>
                        )}
                )}
                </tbody>
            </table>
        </div>
    )
}
export default Tickets;