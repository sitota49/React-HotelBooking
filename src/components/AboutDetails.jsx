import React from 'react'

import {FaDumbbell, FaSpa} from 'react-icons/fa'
import {IoIosBed, IoIosCut} from 'react-icons/io'
export default function AboutDetails() {
   return(
        <section id="about" class="about section-bg">
      
        <div class="row no-gutters">
          <div class="content col-md-5 d-flex align-items-stretch">
            <div class="content">
              <h3>Kebron Guest House</h3>
              <p>
                 Kebron Guest House is a service destination within Addis Ababa where our guests can confidently leave every detail to us, so they can focus on what matters to them most during their stay.
              </p>
              <a href="/about" class="about-btn"><span>About us</span> <i class="bx bx-chevron-right"></i></a>
            </div>
          </div>
          <div class="col-md-7 d-flex align-items-stretch">
            <div class="icon-boxes d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <IoIosBed className="aboutIcons"/>
                  <h4>Rooms</h4>
                  <p>35 well-appointed guestrooms, including twelve Suites, six Family Rooms, ten twin rooms and thirteen standard rooms.</p>
                </div>
                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <FaDumbbell className="aboutIcons"/>
                  <h4>Gym and Fitness Center</h4>
                  <p>Enjoy a complete workout at our 24-hour fitness center facilities offering everything you would expect in state-of-the-art equipment.</p>
                </div>
                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <IoIosCut className="aboutIcons"/>
                  <h4>Hair Salon </h4>
                  <p>We offer a variety of services including professional hair cutting and styling, manicures, pedicures, eyelash, makeup and wedding packages.</p>
                </div>
                <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                  <FaSpa className="aboutIcons"/>
                  <h4>Spa and Wellness Center</h4>
                  <p>Indulge in our Spa's fine selection of skin-care treatments. Relax and rejuvenate from head to toe while taking advantage of our exquisite facilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      
    </section>
       );
     
}
