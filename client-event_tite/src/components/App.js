import React from "react";
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import NavBar from './NavBar';
import EventDash from './EventDash';
import EventPage from "./EventPage";
import CreateEvent from "./CreateEvent";


function App() {
  const [page, setPage] = useState("/")
  const [events, setEvents] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/events")
      .then((r) => r.json())
      .then((data) => setEvents(data));
  }, []);

  function addEvent(addedEvent) {
    setEvents([...events, addedEvent])
  }

  return (
    <div className="App">
      <NavBar onChangePage={setPage}/>
        <Routes>
          <Route path="/new" element={<CreateEvent onAddEvent={addEvent}/>}></Route>
          <Route exact path="/events" element={<EventDash events={events}/>}></Route>
          <Route path="/events/:id" element={<EventPage events={events}/>}></Route>
          {/* 0<Route path="/tickets" element={<Tickets events={events}/>}></Route> */}
          <Route exact path="/" element={<Home/>}></Route>  
          <Route path="*" element={<h1>404 not found</h1>}></Route>
        </Routes>

    </div>
  );
}

export default App;
