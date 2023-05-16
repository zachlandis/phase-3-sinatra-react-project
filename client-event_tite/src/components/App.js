import React, {useState} from "react";
import EventPage from './EventPage';
import NavBar from './NavBar';


function App() {
  const [page, setPage] = useState("/")


  return (
    <div className="App">
      <NavBar onChangePage={setPage}/>
      <EventPage />

    </div>
  );
}

export default App;
