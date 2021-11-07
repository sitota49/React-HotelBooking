
import React from 'react'
import {FaDumbbell, FaSpa} from 'react-icons/fa'
import {IoIosBed, IoIosCut} from 'react-icons/io'
export default function Counts() {
    return (
    <>
     <section id="counts" class="counts">
      <div class="container" data-aos="fade-up">

        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="count-box">
               <div class="icons">
                <FaDumbbell/>
              </div>
              <p>Gym</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div class="count-box">
             <div class="icons">
                <IoIosBed/>
              </div>
              <p>Rooms</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div class="count-box">
              <div class="icons">
                <IoIosCut/>
              </div>
              <p>Hair Salon</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div class="count-box">
              <div class="icons">
                <FaSpa/>
              </div>
          
              <p>Spa</p>
            </div>
          </div>

        </div>

      </div>
    </section>
       </>);
    
}


