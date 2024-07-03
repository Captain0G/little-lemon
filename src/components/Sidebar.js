import { Link } from "react-router-dom";

function Sidebar({isBurger, setBurger}) {


  
  return (
   <>
   
{isBurger && <div className="sidebar">
      <ul>
        <li><button onClick={() => setBurger(false)}>X</button></li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/">Order Online</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </div>}
   
   </>
   
  );
}

export default Sidebar;
