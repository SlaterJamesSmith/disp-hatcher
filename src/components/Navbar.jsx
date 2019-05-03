import React from 'react';
import { Link } from 'react-router-dom';
import fruitStand from '../assets/images/fruitstand.jpeg';

function Navbar(){
  var styledNavbar = {
    display: 'flex',
    // backgroundColor: 'lightblue',
    paddingTop: '10px',
    paddingBottom: '50px',
    color: 'white',
    fontFamily: 'arial',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '200px',
    padding: '0',
    backgroundImage: 'url(' + fruitStand + ')',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    textShadow: '0px 0px 20px black',
    borderBottom: '5px black solid'
  };
  var styledHeader = {
    fontSize: '40px',
    paddingBottom: '0',
    marginBottom: '10px'
  };
  var styledLink = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '20px',
    textShadow: '0px 0px 20px black',
  };
  return (
    <div style={styledNavbar}>
      <h1 style={styledHeader}>Tap List App</h1>
      <span>
        <Link style={styledLink} to="/">list</Link> | <Link style={styledLink} to="/admin">admin</Link>
      </span>
    </div>
  );
}

export default Navbar;
