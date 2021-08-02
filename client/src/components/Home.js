import React, { useState } from 'react'
import '../css/home.css';
import Navbar from './Navbar'
import ScreenLeft from './ScreenLeft'
import ScreenRight from './ScreenRight'

function Home() {
    // const [loading, setLoading] = useState('');

    return (
        <div className="home">
            <Navbar />
            <div className="home__screen">
                <div className="home__screenleft">
                    <ScreenLeft />
                </div>
                <div className="home__screenright">
                    <ScreenRight />
                </div>
            </div>


        </div>
    )
}

export default Home
