import { useParams, Navigate } from "react-router-dom";
import {v4 as uuid} from "uuid"


function DogDetails({ dogs }) {
  const { name } = useParams();
  const currDog = dogs.find(dog => dog.name === name)

  if (currDog) {
    const facts = currDog.facts.map(fact => <p key={uuid()}>{fact}</p>);
    return (
      <div>
        <img src={`/images/${currDog.src}.jpg`} alt=""></img>
        <h1>{currDog.name}</h1>
        <h3>Age: {currDog.age}</h3>
        {facts}
      </div>
    );
  } else {
    return <Navigate to="/dogs" />;
  }
}

export default DogDetails;