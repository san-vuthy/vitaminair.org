import React from 'react';
import footer  from 'react-bootstrap/ModalFooter'

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container text-white">  
                    <div className="row">                 
                        <div className="col-sm-4">
                            <h1>VitaminAir</h1>                        
                        </div>
                        <div id="logo" className="col-sm-4">
                            <img className="sw-logo" alt="sw-logo" src="./img/sw-green.png" style={{width:'15rem'}}/>  
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
