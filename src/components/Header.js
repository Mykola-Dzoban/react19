import { Link } from "react-router-dom";
import './Header.css';

export function Header(){
  return (
    <nav>
      <Link to="/">Main</Link>

      <Link to="/posts">Posts</Link>

      <Link to="/photos">Photos</Link>

      <Link to="/contacts">Contacts</Link>
    </nav>
  );
};

