import { useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();
  let currDog;

  for (let dog of dogs) {
    if (dog.name === name) {
      currDog = dog;
    }
  }

  return (
    <div>
      <img src={`/images/${currDog.src}.jpg`}></img>
      <h1>{currDog.name}</h1>
      <h3>Age: {currDog.age}</h3>
     {currDog.facts.map((fact, i) => <p key={i}>{fact}</p>)}
    </div>
  )
}

export default DogDetails;