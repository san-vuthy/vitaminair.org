import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {
  Link,
} from "react-scroll";

function NavBar () {
    return (
      <React.Fragment>
        <div id="sticky-nav">
          <Navbar className="navbar navbar-light text-white">
            <div className="container">
              <Nav.Link id="v-logo">
                <Link className="text-white">VitaminAir</Link>
              </Nav.Link>
              <Nav className="ml-auto">
                  <Link className="nav"                   
                    to="reforestation"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Reforestation
                  </Link>
                  <Link                    
                    to="naturalfarming"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >                   
                    NaturalFarming
                  </Link>
                  <Link                    
                    to="ecotourism"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Ecotourism
                  </Link>
                  <Link                    
                    to="seedsbomb"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    SeedsBomb
                  </Link>
                  <Link                    
                    to="airwater"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    AirWater
                  </Link>
                  <Link                   
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    About
                  </Link>
              </Nav>
            </div>
          </Navbar>
        </div>
      </React.Fragment>
    );
  }

export default NavBar;
