import React from 'react'
import HomeHero from '../components/HomeHero';
import FeaturedRooms from '../components/FeaturedRooms';
import AboutDetails from '../components/AboutDetails';
import Amenities from '../components/Amenities';
import Tabs from '../components/Tabs';
import Gallery from '../components/Gallery';
import Testimonals from '../components/Testimonals';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <>
        <HomeHero />
       <Amenities />
        <AboutDetails/>
        <Tabs />
        <FeaturedRooms/>
        <Gallery />
        <Testimonals />
        <Contact />
        </>

    )
}
