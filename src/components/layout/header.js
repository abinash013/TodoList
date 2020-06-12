import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return (
    <header style={headerstyle}>
    <h1> TodoList</h1>
    <Link style={linkstyle} to="/" >Home</Link> |
    <Link style={linkstyle} to="/about" > About</Link>

    </header>
  )
}
  const headerstyle={
    background:'#102',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
  }

  const linkstyle={
    color:'#fff',
    textDecoration:'none',
  }
export default Header;
