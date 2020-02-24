import React from 'react';
import Card from 'react-bootstrap/Card';

function Seeds() {
    return (
        <div className="seeds-cover">
            <div  className="container">
                <div className="seeds">
                    <div className="rounded float-left">
                        <img className="img-left" alt="seeds bomb" src="./img/seeds.png" style={{width:'80%'}}/>
                    </div>
                    <div className="seeds-bomb" style={{width:'35rem'}}>
                        <h1>Seeds Bomb</h1>
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

export default Seeds;
