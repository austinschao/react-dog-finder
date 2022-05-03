import react from "react";
import { Link } from 'react-router-dom';
import {v4 as uuid} from "uuid"


function NavBar({ dogs }) {
  const navLinks = dogs.map(dog =>
        <Link key={uuid()} to={`/dogs/${dog.name}`}>{dog.name}</Link>
      )
  return (
    <nav className="NavBar">
      {navLinks}
    </nav>
  )
}

export default NavBar