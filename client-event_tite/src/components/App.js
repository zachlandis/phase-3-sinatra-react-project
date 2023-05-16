import React, {useState} from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import NavBar from './NavBar';
import EventPage from './EventPage';
import CreateEvent from "./CreateEvent";


function App() {
  const [page, setPage] = useState("/")


  return (
    <div className="App">
      <NavBar onChangePage={setPage}/>
        <Routes>
          <Route path="/events" element={<EventPage/>}></Route>
          <Route exact path="/" element={<Home/>}></Route>  
          <Route path="*" element={<h1>404 not found</h1>}></Route>
        </Routes>

    </div>
  );
}

export default App;
