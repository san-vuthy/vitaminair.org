import React,{useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {
  Link,
  Events,
  animateScroll as scroll,
  scroller
} from "react-scroll";

function NavBar () {

  const [navbarToggle, setNavbarToggle] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarToggle(!navbarToggle);
  };

    return (
      <React.Fragment>
        <div id="sticky-nav">
          <Navbar className="navbar navbar-light bg-warning">
            <div className="container">
              <Nav.Link id="v-logo">
                <Link>VitaminAir</Link>
              </Nav.Link>
              <Nav className="ml-auto">
                <Nav.Link className="reforest">
                  <Link                    
                    to="reforestation"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Reforestation
                  </Link>
                </Nav.Link>
                <Nav.Link className="farming">
                  <Link                    
                    to="naturalfarming"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >                   
                    Natural-Farming
                  </Link>
                </Nav.Link>
                <Nav.Link className="eco">
                  <Link                    
                    to="ecotourism"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Ecotourism
                  </Link>
                </Nav.Link>
                <Nav.Link className="seedsbomb">
                  <Link                    
                    to="seedsbomb"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Seeds-Bomb
                  </Link>
                </Nav.Link>
                <Nav.Link className="air">
                  <Link                    
                    to="airwater"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Air-Water
                  </Link>
                </Nav.Link>
                <Nav.Link className="about">
                  <Link                   
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    About
                  </Link>
                </Nav.Link>
              </Nav>
            </div>
          </Navbar>
        </div>
      </React.Fragment>
    );
  }

export default NavBar;
