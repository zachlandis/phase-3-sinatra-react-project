import React from 'react';

function Tickets({events}) {

    const tickets = events.map((eachEvent) => (
            <li>{eachEvent.tickets.ticket_number}</li>
    ))
            

    return (
        <div>
            <ol>
                {tickets}
            </ol>
        </div>
    )
}
export default Tickets;