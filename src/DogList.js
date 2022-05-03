import { Link } from "react-router-dom"
import {v4 as uuid} from "uuid"

function DogList({ dogs }) {

  const dogLinks = dogs.map(dog => <div key={uuid()}>
          <img src={`/images/${dog.src}.jpg`} alt={dog.name} />
          <h3><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></h3>
        </div>)

  return (
    <div>
      {dogLinks}
  </div>
  )
}

export default DogList;