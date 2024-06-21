import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="items-wrapper">
      <Link to="/">
      
        <img src="/logo.svg" alt="" />
      </Link>
        <ul>
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
      </div>
    </nav>
  );
}

export default Nav;
