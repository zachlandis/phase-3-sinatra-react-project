import React from 'react';

function Tickets({events}) {

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
                {events.map((singleEvent) => (
                singleEvent.tickets.map((ticket) => {
                    return (
                        <tr key={ticket.id}>
                            <td>{ticket.ticket_number}</td>
                            <td>{ticket.ticket_holder}</td>
                            <td>{singleEvent.event_name}</td>
                            <td>{singleEvent.price}</td>
                            <td><button>DELETE TICKET</button></td>
                            <td><button>UPDATE TICKET</button></td>
                        </tr>
                        )
                    })
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default Tickets;