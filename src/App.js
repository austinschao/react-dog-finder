import './App.css';
import { React, useState } from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import axios from "axios";
import DogList from "./DogList"
import DogDetails from "./DogDetails"
import NavBar from "./Nav"



function App() {
  const [dogs, setDogs] = useState("")
  const [loading, setLoading] = useState(false);

  async function getDogs(){
    const response = await axios.get("http://localhost:5001/dogs")
    let dogs = response.data
    setDogs(dogs);
    setLoading(true);
  }

  if (loading === false) {
    getDogs()
    return <h1>Loading</h1>
  } else {
    return (
      <div className="App">
        <h1>Dawgs!</h1>
        <BrowserRouter>
        <NavBar dogs={dogs}/>
          <Routes>
            <Route path="/" element={<DogList dogs={dogs}/>} />
            <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
