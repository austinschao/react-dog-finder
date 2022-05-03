import react from "react";
import { Link } from 'react-router-dom';

function NavBar({ dogs }){
  return (
    <nav className="NavBar">
      {dogs.map((dog, i) =>
        <Link key={i} to={`/dogs/${dog.name}`}>{dog.name}</Link>
      )}
    </nav>
  )
}

export default NavBar