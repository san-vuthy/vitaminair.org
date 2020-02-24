import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';


function navbar() {
    return (
        <div>
              <Navbar className=" navbar navbar-light bg-warning">
              <div className="container">
                <Navbar.Brand href="#home">Home</Navbar.Brand>                
                <Nav className="ml-auto">                
                    <Nav.Link href="#reforestation">Reforestation</Nav.Link>
                    <Nav.Link href="#natural">Natural Farming</Nav.Link>
                    <Nav.Link href="#ecotourism">Ecotourism</Nav.Link>
                    <Nav.Link href="#seeds">Seeds Bomb</Nav.Link>
                    <Nav.Link href="#air">Air Water</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>                    
                </Nav>
                </div>
            </Navbar>
        </div>
    )
}

export default navbar;

