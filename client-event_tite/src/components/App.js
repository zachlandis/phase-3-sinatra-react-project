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
    console.log("Deleted", deletedTicket)
    // const filteredEvents = events.map((event) => {
    //   if (event.id === deletedTicket.event_id) {
    //       const updatedTickets = event.tickets.filter(ticket => ticket.id !== deletedTicket.ticket_id);
    //       console.log(updatedTickets)
    //     //   return {
    //     //     ...event,
    //     //     tickets: updatedTickets
    //     //   };
    //     }
    //     // return event;
    //   });
    //   console.log("Before Render:", events)
    //   setEvents(filteredEvents);
    //   console.log("After Render:", events)
    };
  
  function updateTicket(updatedTicket) {
  //   const updatedEvents = events.map((event) => {
  //     if (event.id === updatedTicket.event_id) {
  //       const updatedTickets = 
  //       return updatedTicket;
  //     } else {
  //       return event;
  //     }
  //   });
  //   setEvents(updatedTickets);
  }


  return (
    <div className="App">
      <NavBar onChangePage={setPage}/>
        <Routes>
          <Route path="/new" element={<CreateEvent onAddEvent={addEvent}/>}></Route>
          <Route exact path="/events" element={<EventDash events={events}/>}></Route>
          <Route path="/events/:id" element={<EventPage events={events} onDeleteTicket={deleteTicket} onUpdateTicket={updateTicket}/>}></Route>
          {/* <Route exact path="/" element={<Home/>}></Route>   */}
          <Route path="*" element={<h1>404 not found</h1>}></Route>
        </Routes>

    </div>
  );
}

export default App;
