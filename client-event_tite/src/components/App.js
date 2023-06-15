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

  function addEvent(addedEvent) {
    setEvents([...events, addedEvent])
  }

  function deleteTicket(deletedTicket) {
    const updatedEvents = events.map((e) => {
      if (e.id === deletedTicket.event_id){
        const updatedTickets = e.tickets.filter(ticket => {
          return ticket.id !== deletedTicket.id
        })
        return {
          ...e,
          tickets: updatedTickets
        }
      }
      return e
      })
      setEvents(updatedEvents)
      }


  function updateTicket(updatedTicket) {
    const newEvents = events.map((e) => {
      if (e.id === updatedTicket.event_id) {
        const updatedTickets = e.tickets.map((ticket) => {
          if (ticket.id === updatedTicket.id) {
            return {
              ...ticket,
              ticket_number: updatedTicket.ticket_number,
              ticket_holder: updatedTicket.ticket_holder,
              ticket_price: updatedTicket.ticket_price,
            };
          }
          return ticket;
        });
        return {
          ...e,
          tickets: updatedTickets,
        };
      }
      return e;
    });
    setEvents(newEvents)
  }

  function addTicket(addedTicket) {
    const updatedEvent = events.map((e) => {
      if (e.id === addedTicket.event_id) {
        return {
          ...e,
          tickets: [...e.tickets, addedTicket]
        };
      }
      return e;
    });
    setEvents(updatedEvent)
  }

  return (
    <div className="App">
      <NavBar onChangePage={setPage}/>
        <Routes>
          <Route path="/new" element={<CreateEvent onAddEvent={addEvent}/>}></Route>
          <Route exact path="/events" element={<EventDash events={events}/>}></Route>
          <Route path="/events/:id" element={<EventPage events={events} onDeleteTicket={deleteTicket} onUpdateTicket={updateTicket} onAddTicket={addTicket} />}></Route>
        </Routes>

    </div>
  );
}


export default App;
