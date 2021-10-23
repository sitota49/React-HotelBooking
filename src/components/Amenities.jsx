
import React from 'react'
import {FaParking, FaDumbbell, FaWifi, FaShuttleVan, FaSpa} from 'react-icons/fa'
import {IoIosPeople} from 'react-icons/io'
import {GiCoffeeCup} from 'react-icons/gi'
export default function Amenities() {
    return (
    <> 
      <section id="clients" class="clients">
      <div class="container" data-aos="zoom-in">

        <div class="clients-slider swiper">
          <div class="swiper-wrapper align-items-center">
            <div class="swiper-slide">
              <div class=" amenityItem">
                <FaParking className="amentiyIcon"/>
                <p>Free Parking</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="amenityItem">
                <FaDumbbell className="amentiyIcon"/>
                <p>Gym</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class=" amenityItem">
                <IoIosPeople className="amentiyIcon"/>
                <p>Meeting Rooms</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class=" amenityItem">
                <FaWifi className="amentiyIcon"/>
                <p>WiFi</p>
              </div>
            </div>
             <div class="swiper-slide">
              <div class=" amenityItem">
                <GiCoffeeCup className="amentiyIcon"/>
                <p>Breakfast</p>
              </div>
            </div>
             <div class="swiper-slide">
              <div class=" amenityItem">
                <FaShuttleVan className="amentiyIcon"/>
                <p>Shuttle</p>
              </div>
            </div>
           
           
            <div class="swiper-slide">
              <div class=" amenityItem">
                <FaSpa className="amentiyIcon"/>
                <p>Spa</p>
              </div>
            </div>
           </div>
           </div>
          <div class="swiper-pagination"></div>
        </div>
</section>
     
    </>);
    
}


