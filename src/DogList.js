import React from "react";
import { Link } from "react-router-dom"
import {v4 as uuid} from "uuid"

function DogList({ dogs }) {

  return (
    <div>
      {dogs.map((dog, i) =>
        <div key={uuid()}>
          <img src={`/images/${dog.src}.jpg`} alt={dog.name} />
          <h3><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></h3>
        </div>
      )}
  </div>
  )
}

export default DogList;