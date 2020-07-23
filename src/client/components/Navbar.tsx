import * as React from "react";
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component<INavbarProps, INavbarState> {

  render() {
    return (
    <nav className="nav justify-content-center align-items-center p-3 shadow">
    <NavLink className="btn btn-link mx-3" to="/">Home</NavLink>
    <NavLink className="btn btn-link mx-3" to="/films">Films</NavLink>
    <NavLink className="btn btn-link mx-3" to="/people">Peoples</NavLink>
    </nav>
    );
  }
}

export interface INavbarProps {}

export interface INavbarState {
  name: string;
}

export default Navbar;
