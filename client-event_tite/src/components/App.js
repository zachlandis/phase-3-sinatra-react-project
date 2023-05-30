import React from "react";
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import NavBar from './NavBar';
import EventDash from './EventDash';
import EventPage from "./EventPage";
import CreateEvent from "./CreateEvent";


function App() {
  const [page, setPage] = useState("/events")
  const [events, setEvents] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/events")
      .then((r) => r.json())
      .then((data) => setEvents(data))
  }, []);

  // ADD EVENT

  function addEvent(addedEvent) {
    setEvents([...events, addedEvent])
  }
  
  // DELETE TICKET

  function deleteTicket(deletedTicket) {
    console.log("Deleted", deletedTicket)

    const updatedEvent = events.find((e) => e.id === deletedTicket.event_id)
    const updatedTickets = updatedEvent.tickets.filter(
      ticket => ticket.id !== deletedTicket.ticket_id);

    const updatedEvents = events.map((event) => {
      if (event.id === deletedTicket.event_id) {
        return {
             ...updatedEvent,
             tickets: updatedTickets
           };
        }
        return event;
      });
      setEvents([...updatedEvents]);
    };
  
  // UPDATE TICKET 

  function updateTicket(updatedTicket) {
    const updatedEvent = events.find((event) => 
      event.id === updatedTicket.event_id)

    const updatedTickets = updatedEvent.tickets.filter((ticket) =>
      ticket.id !== updatedTicket.ticket_id
      )

    const updatedEvents = events.map((event) => {
      if (event.id === updatedTicket.event_id) {
        return {
          ...updatedEvent,
          tickets: updatedTickets
        };
      }
      return event
    })
    setEvents([...updatedEvents])
  }


  // ADD TICKET

  function addTicket(addedTicket) {
    const updatedEvent = events.find((event) => 
      event.id === addedTicket.event_id);

    const updatedTickets = updatedEvent.tickets.filter((ticket) =>
      ticket.id !== addedTicket.ticket_id
      )
  
    const updatedEvents = events.map((event) => {
      if (event.id === addedTicket.event_id) {
        return {
          ...event,
          tickets: [...event.tickets, addedTicket]
        }
      }
      return event;
    })
    setEvents([updatedEvents]);
    }
  
  
  


  return (
    <div className="App">
      <NavBar onChangePage={setPage}/>
        <Routes>
          <Route path="/new" element={<CreateEvent onAddEvent={addEvent}/>}></Route>
          <Route exact path="/events" element={<EventDash events={events}/>}></Route>
          <Route path="/events/:id" element={<EventPage events={events} onDeleteTicket={deleteTicket} onUpdateTicket={updateTicket} onAddTicket={addTicket} />}></Route>
          {/* <Route exact path="/" element={<Home/>}></Route>   */}
          <Route path="*" element={<h1>404 not found</h1>}></Route>
        </Routes>

    </div>
  );
}


export default App;
