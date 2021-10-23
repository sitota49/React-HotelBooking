
import React from 'react'
import {GoLocation} from 'react-icons/go'

export default function Testimonals() {
    return (
    <> 
    <section id="testimonials" class="testimonials section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Testimonials</h2>
          <p>What our customers say about us</p>
        </div>
       
        <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src="assets/img/customers/review1.jpg" class="testimonial-img" alt=""/>
                  <h3>Demiss Zike </h3>
                  <h4><GoLocation/> Alexandria, Virginia</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Kebron Guesthouse is truly a home away from home. This was our second stay at Kebron Guesthouse. We stayed here in 2019 and we liked it a lot enough to be a repeat customer. This time around my wife and I stayed here for over 9 months from December of 2020 to September 2021.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src="assets/img/customers/review2.jpg" class="testimonial-img" alt=""/>
                  <h3>Francessca</h3>
                   <h4><GoLocation/> Texas</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    We were very well received in Kebron. The location is well situated. The rooms are spacious, comfortable, clean and well equipped. You have in the same building a hammam, hairdresser and fitness center. It will be a pleasure to come back if the opportunity arises.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src="assets/img/customers/review3.jpg" class="testimonial-img" alt=""/>
                  <h3>Jena Karlis</h3>
                   <h4><GoLocation/> South Africa</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Kebron was the perfect place to stay for a month-long stay in Addis, Teshale and his staff were incredibly helpful and friendly. The guest house was always clean, and if there was ever an issue the staff was quick to fix it. Rooms were spacious and provided a great view of the Lafto neighborhood.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src="assets/img/customers/review4.jpg" class="testimonial-img" alt=""/>
                  <h3>ShubhamHundet </h3>
                   <h4><GoLocation/> Gurugram (Gurgaon), India</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    The experience of this hotel is very good and located in very calm area and Mr Tashala the owner of hotel is very supportive. Sometime there was problem in washroom and rest everything is very good and service from room service are fine. There is good food in the area!
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                 <img src="assets/img/customers/review5.jpg" class="testimonial-img" alt=""/>
                  <h3>Sao D</h3>
                   <h4><GoLocation/> Kuwait</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    I recently stayed at Kebron, and the reception, hospitality, cleanliness is second to none for price and location. The staff at the guess house made you feel welcome and were very helpful in every way they could....I would definitely be back and recommend this experience to all.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        </div>
</section>
      
      </>);
    
}


