import React from 'react';
import Card from 'react-bootstrap/Card';

function Natural() {
    return (
        <div className="natural-cover">
            <div  className="container">
                <div className="nature">
                    <div className="rounded float-left">
                        <img className="img-left" alt="farm" src="./img/farm.png" style={{width:'80%'}}/>
                    </div>
                    <div className="natural" style={{width:'35rem'}}>
                        <h1>Natural Farming</h1>
                        <h4>Rebuild the planet.</h4>
                        <p>
                            Grood is Cambodia’s best brand of electric bikes because we put people first.
                            The most important part of every Grood isn’t some high-tech gadget or fancy
                            bicycle component – it’s the person riding it. Producing great eBikes is just the beginning.
                            To be truly great, a company has to stand for something…
                        </p>
                        <Card.Link href="#">Read more</Card.Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Natural;
