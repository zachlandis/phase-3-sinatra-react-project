import React from "react";
import { Link } from "react-router-dom"

function EventDash({events}) {
    
    const currencyFormat = (value) =>
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(value);


    const calendar = events.map((eachEvent) => (
        <div className="event-page">
            <div class="event-details">
                <div>
                    <p><strong>DATE:</strong> {new Date(eachEvent.event_date).toLocaleDateString()}</p>
                </div>
                <div>
                    <p><strong>EVENT:</strong> {eachEvent.event_name}</p>
                </div>
                <div>
                    <p><strong>VENUE:</strong> {eachEvent.event_venue}</p>
                </div>
                <div>
                    <p><strong>HEADLINER:</strong> {eachEvent.headliner}</p>
                </div>
            </div>
            <div id="event-updates">
                <p><strong>TICKETS SOLD:</strong> {eachEvent.tickets.length}</p>
                <p><strong>REVENUES:</strong> {currencyFormat(eachEvent.tickets.length * eachEvent.price)}</p>
            </div>
            
            <div>
            <Link to={`/events/${eachEvent.id}`}>SEE MORE</Link>
            </div>
        </div>
    ))

    return (
        <div>
            {calendar}
        </div>
    )
}

export default EventDash;