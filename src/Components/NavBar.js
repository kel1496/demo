import React from 'react';
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function NavBar(){
    return(
        <Navbar className={'myNav'} style={{marginLeft:'auto', marginRight:"auto"}} collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand className={'logo'}><NavLink to={'/'} ><strong>COACH</strong>PYME</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav >
                        <NavLink exact activeStyle={{
                            color: "#22d099"
                        }} to={"/"}>INICIO</NavLink>
                        <NavLink activeStyle={{
                            color: "#22d099"
                        }} to={"/que-obtengo"}>QUE OBTENGO</NavLink>
                        <NavLink className={"hexa"} to={"/"}>ACCEDER</NavLink>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;
