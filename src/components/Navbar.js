import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const handleChange = (event) => {
    props.setGameVideo(event.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          E-Sport by Youssef Charfi
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/leagues"
              >
                Leagues
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/teams">
                Teams
              </Link>
            </li>
            <li className="nav-item">
              <select
                className="custom-select mt-2"
                id="inlineFormCustomSelect"
                defaultValue="all"
                onChange={(event) => handleChange(event)}
              >
                <option value="all">All games</option>
                <option value="csgo">CS-GO</option>
                <option value="codmw">Call Of Duty</option>
                <option value="dota2">Dota 2</option>
                <option value="lol">League Of Legend</option>
                <option value="pubg">PUBG</option>
                <option value="ow">Overwatch </option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
