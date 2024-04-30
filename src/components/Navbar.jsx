import { Link } from "react-router-dom";
import "../index.css";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <ul>
        <Link to="/About">About</Link>
        <Link to="/Booking">Work</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Login">Login</Link>
      </ul>
    </nav>
  );
}
