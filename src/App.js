import './App.css';
import { React, useState } from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import axios from "axios";



import DogList from "./DogList"
import DogDetails from "./DogDetails"
import Nav from "./Nav"
function App() {
  const [ dogs , setDogs] = useState({})

async function dawgs(){
  const response = await axios.get("http://localhost:5001/dogs")
  let dogsData = response.data
  setDogs(dogsData)

}

dawgs();

  return (
    <div className="App">
      <h1>Dawgs!</h1>
      <BrowserRouter>
      <Nav dogData={dogs}/>
        <Routes>
          <Route path="/dogs" />
          <Route path="/" element={<DogList />} />
          <Route path="/dogs/:name" element={<DogDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
