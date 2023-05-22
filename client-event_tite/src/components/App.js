import React from "react";
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import NavBar from './NavBar';
import EventDash from './EventDash';
import EventPage from "./EventPage";
import CreateEvent from "./CreateEvent";
import Tickets from "./Tickets";


function App() {
  const [page, setPage] = useState("/")
  const [events, setEvents] = useState([])
  const [tickets, setTickets] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/events")
      .then((r) => r.json())
      .then((data) => setEvents(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/tickets")
    .then((r) => r.json())
    .then((data) => setTickets(data));
}, []);

  function addEvent(addedEvent) {
    setEvents([...events, addedEvent])
  }

  function deleteTicket(deletedTicket) {
    const updatedTickets = tickets.filter((ticket) => ticket.id !== deletedTicket.id)
    setTickets(updatedTickets)
  }

  function updateTicket(updatedTicket) {
    const updatedTickets = tickets.map((ticket) => {
      if (ticket.id === updatedTicket.id) {
        return updatedTicket;
      } else {
        return ticket;
      }
    });
    setTickets(updatedTickets);
  }


  return (
    <div className="App">
      <NavBar onChangePage={setPage}/>
        <Routes>
          <Route path="/new" element={<CreateEvent onAddEvent={addEvent}/>}></Route>
          <Route exact path="/events" element={<EventDash events={events}/>}></Route>
          <Route path="/events/:id" element={<EventPage events={events}/>}></Route>
          <Route path="/tickets" element={<Tickets 
          tickets={tickets}
          onDeleteTicket={deleteTicket}
          onUpdateTicket={updateTicket}
          />}
            ></Route>
          <Route path="/tickets" element={<Tickets events={events}/>}></Route>
          <Route exact path="/" element={<Home/>}></Route>  
          <Route path="*" element={<h1>404 not found</h1>}></Route>
        </Routes>

    </div>
  );
}

export default App;
