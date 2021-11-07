import React from 'react'
import Hero from '../components/HomeHero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';
const Rooms = () => {
    return (
    <div>
        {/* <Hero hero="roomsHero">
        </Hero> */}
        {/* <Banner title="Available Rooms" subtitle="Best in Class Room">
               
        </Banner> */}
        <RoomsContainer/>
    </div>
    )
}

export default Rooms
