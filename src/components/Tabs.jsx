

    
import React from 'react'
import {FaDumbbell, FaBed, FaCut, FaSpa} from 'react-icons/fa'
import {IoIosBed, IoIosCut} from 'react-icons/io'

export default function Tabs() {
    return (
    <> 
    <section id="tabs" class="tabs">
      <div class="container" data-aos="fade-up">
  
        <div class="section-title">
          <h2>Services</h2>
          
        </div>


        <ul class="nav nav-tabs row d-flex ">
          <li class="nav-item col-4">
            <a class="nav-link active show" data-toggle="tab" data-target="#tab-1">
              <FaSpa class="tabIcons" />
              <h4 class="d-none d-lg-block">Spa and Wellness Center</h4>
            </a>
          </li>
          <li class="nav-item col-4">
            <a class="nav-link" data-toggle="tab" data-target="#tab-2">
              <FaDumbbell class="tabIcons" />
              <h4 class="d-none d-lg-block">Gym and Fitness Center</h4>
            </a>
          </li>
          <li class="nav-item col-4">
            <a class="nav-link" data-toggle="tab" data-target="#tab-3">
              <IoIosCut class="tabIcons" />
              <h4 class="d-none d-lg-block">
                Hair Salon
              </h4>
            </a>
          </li>
         
          
        </ul>

        <div class="tab-content">
          <div class="tab-pane active show" id="tab-1">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
                <h3>Indulge in our Spa's fine selection of skin-care treatments.</h3>
                 <p class="fst-italic">
                 We have created a variety of spa treatments with high-quality products and services that will transport you to a different retreat.
                </p>
               
                <ul>
                  <li><i class="ri-check-double-line"></i> Steam & Sauna</li>
                  <li><i class="ri-check-double-line"></i> Body Scrubs</li>
                  <li><i class="ri-check-double-line"></i> Massage</li>
                   <li><i class="ri-check-double-line"></i> Manicure & Pedicure</li>
                  <li><i class="ri-check-double-line"></i> Waxing</li>
                  <li><i class="ri-check-double-line"></i> Facial</li>
                </ul>
               
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                 <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="assets/img/tabs-1.jpg" alt="" class="img-fluid"/>
                    </div>
                     <div class="carousel-item">
                    <img src="assets/img/3Z3A3105.JPG" alt="" class="img-fluid"/>
                    </div>
                     <div class="carousel-item">
                    <img src="assets/img/3Z3A3145.JPG" alt="" class="img-fluid"/>
                    </div>
                     <div class="carousel-item">
                    <img src="assets/img/3Z3A3294.JPG" alt="" class="img-fluid"/>
                    </div>
                     <div class="carousel-item">
                    <img src="assets/img/3Z3A3308.JPG" alt="" class="img-fluid"/>
                    </div>
                    
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
          </div>
          </div>

               
          </div>
           
          
          <div class="tab-pane" id="tab-2">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Enjoy a complete workout at our 24-hour fitness center facilities offering everything you would expect in state-of-the-art equipment.</h3>
                <p>
                Specially created for our customers, our fitness program is designed to designed to allow everyone in the family to ﬁnd enjoyable activities so as to empower your body, inspire your mind, and nurture your soul.

                </p>
                <p class="fst-italic">
                  If you’re feeling a bit more active, our good-view gymnasium, personal trainers and a comprehensive well-being program are designed to help you do just that. 
                </p>
                <ul>
                  <li><i class="ri-check-double-line"></i> Fun Filled Group Biking Classes</li>
                  <li><i class="ri-check-double-line"></i> Strength and Endurance training - Body Building</li>
                  <li><i class="ri-check-double-line"></i> Grit Cardio hard work outs & high-intensity exercises  </li>
                  <li><i class="ri-check-double-line"></i> Aerobics  </li>
                </ul>
              </div>
               <div class="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                 <div id="carouselExampleIndicators2" class="carousel slide carousel-fade" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="4"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="assets/img/tabs-2.jpg" alt="" class="img-fluid"/>
                    </div>
                     <div class="carousel-item">
                    <img src="assets/img/gym.jpg" alt="" class="img-fluid"/>
                    </div>
                     <div class="carousel-item">
                    <img src="assets/img/3Z3A3458.JPG" alt="" class="img-fluid"/>
                    </div>
                     <div class="carousel-item">
                    <img src="assets/img/3Z3A3101.JPG" alt="" class="img-fluid"/>
                    </div>
                     <div class="carousel-item">
                    <img src="assets/img/3Z3A3483.JPG" alt="" class="img-fluid"/>
                    </div>
                    
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
          </div>
          </div>
          
            </div>
        
        <div class="tab-pane" id="tab-3">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Enjoy a soothing unisex hair salon offering all your hair and styling essentials</h3>
                
                <ul>
                  <li><i class="ri-check-double-line"></i> Hair Styling & Coloring</li>
                  <li><i class="ri-check-double-line"></i> Bridal Packages</li>
                  <li><i class="ri-check-double-line"></i> Makeup and Makeovers</li>
                  <li><i class="ri-check-double-line"></i> Men's grooming</li>

                  
                </ul>
               
              </div>
               <div class="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                 <div id="carouselExampleIndicators3" class="carousel slide carousel-fade" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators3" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="4"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="assets/img/tabs-3.jpg" alt="" class="img-fluid"/>
                    </div>
                     <div class="carousel-item">
                    <img src="assets/img/3Z3A3282.JPG" alt="" class="img-fluid"/>
                    </div>
                     <div class="carousel-item">
                    <img src="assets/img/3Z3A3291.JPG" alt="" class="img-fluid"/>
                    </div>
                     <div class="carousel-item">
                    <img src="assets/img/3Z3A3261.JPG" alt="" class="img-fluid"/>
                    </div>
                     <div class="carousel-item">
                    <img src="assets/img/3Z3A3218.JPG" alt="" class="img-fluid"/>
                    </div>
                    
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
          </div>
         </div>
        </div>
      </div>
      </div>
          
    </section>

  
      </>);
    
}


