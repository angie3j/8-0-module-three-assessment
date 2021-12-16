import React from "react";
import { Link } from "react-router-dom";
import "../App.css"


class Nav extends React.Component {
    render () {
      return (
      <div className="nav">
            <Link to='/'></Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/people'>People</Link>
            <Link to='/locations'>Locations</Link>
        </div>
      )
    }
  }
  
  export default Nav;