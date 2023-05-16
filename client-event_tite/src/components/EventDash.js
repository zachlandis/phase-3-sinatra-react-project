import React from "react";
import CreateEvent from "./CreateEvent";
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';

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
                <p><strong>IMPORTANT UPDATES:</strong> {eachEvent.event_updates}</p>
            </div>
            
            <div>
            <Link to={`/events/${eachEvent.id}`}>See More</Link>
                <Button>+ Event Update</Button>
                <Button>Delete Event</Button>
            </div>
        </div>
    ))

    return (
        <div>
            <CreateEvent/>
            {calendar}
        </div>
    )
}

export default EventDash;