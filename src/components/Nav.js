import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"


class Nav extends React.Component {
    render () {
      return (
      <div className="nav">
            <Link to='/'>
                <img 
                className='logo'
                src='https://i.imgur.com/90XAmJe.png'
                alt='Graphic Shape Logo'
                />
            </Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/people'>People</Link>
            <Link to='/locations'>Locations</Link>
        </div>
      );
    }
  }
  
  export default Nav;