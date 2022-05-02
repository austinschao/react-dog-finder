import react from "react";
import { Link } from 'react-router-dom';

function Nav({ dogNames }){
  console.log(dogNames)
  return (
    <nav className="NavBar">
      {dogNames.map(dogName =>{
        <Link to={dogName.name}>{dogName.name}</Link>
      })}  
    </nav>
  )
}

export default Nav