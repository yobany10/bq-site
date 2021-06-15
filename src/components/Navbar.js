import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import './Navbar.css'

const NavbarTop = () => {
    return (
        <Navbar bg="dark" variant="dark" className='nav_container'>
            <Navbar.Brand className='nav_title'><Link to='/'>CHARLOTTE BQ</Link></Navbar.Brand>
            <Nav className="mr-auto nav_links">
              <Link to='/'>Home</Link>
              <Link to='/quizzers'>Quizzers</Link>
            </Nav>
        </Navbar>
    )
}

export default NavbarTop