import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Reforestation from './contents/Reforestation';
import Natural from './contents/Natural';
import Ecotourism from './contents/Ecotourism';
import Seeds from './contents/Seeds';
import Air from './contents/Air';
import About from './contents/About';
import Footer from './Footer';

function home() {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Reforestation/>
            <Natural/>
            <Ecotourism/>
            <Seeds/>
            <Air/>
            <About/>
            <Footer/>
        </div>
    )
}

export default home;