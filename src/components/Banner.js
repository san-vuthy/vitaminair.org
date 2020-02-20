import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Banner() {
    return (
        <div id="banner-background" style={{height:'35rem'}}>
            <Jumbotron id="banner" fluid className="p-3 mb-2 bg-success text-white" style={{height:'30rem'}}>
                <Container className="text-center">
                    <h1>VitaminAir</h1> 
                    <p>
                        This is the project that rebuild the forest & keep it for the next generation.
                    </p>
                    <p>
                        Longer life of the nature is the way we do for the next generation of humans beings.
                    </p>
                    <p>
                        This is the power of nature.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Banner;
