import React from 'react';

import './Home.css'
import t7 from '../../resources/t7.jpg'
import lol from '../../resources/lol.jpg'
import user from '../../resources/user.png'
import Slider from '../Slider/Slider';
import { useSelector } from 'react-redux';

const Home = () => {
    const streams = useSelector(state => state.streamReducer.streams);
    console.log("STREAMS " + JSON.stringify(streams))

    const images = [
        t7, lol, user
    ]

    return (
        <div className="container" >
            {streams.length > 0 ? (
                streams.map(stream => (
                    <div key={stream.id} className="results">{stream.title}</div>
                ))
            ) : <Slider
                slides={images}
                time={6000}
            />}

        </div >
    );

}

export default Home;