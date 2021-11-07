import React from 'react'

export default function HomeHero() {
  const tab1 = {
  
  backgroundImage: 'url(' + 'assets/img/defaultBcg.jpg' + ')',
};
const tab2 = {
  
  backgroundImage: 'url(' + 'assets/img/3Z3A3105.JPG' + ')',
};
const tab3 = {
  
  backgroundImage: 'url(' + 'assets/img/3Z3A3477.JPG' + ')',
};
    return (
    <> 
    {/* <section id="hero" class="d-flex align-items-center">
       
    <div class="container" data-aos="zoom-out" data-aos-delay="100">
      <div class="row">
        <div class="col-xl-6">
          <h1>Luxurious Stay at Kebron Guest House</h1>
          <h2>Home away from home</h2>
          <a href="/rooms" class="btn-get-started scrollto">Get a Room</a>
        </div>
      </div>
    </div>

  </section> */}
   <section id="hero">
    <div id="heroCarousel" data-interval="4000" class="carousel slide carousel-fade" data-ride="carousel"  data-aos="zoom-out" data-aos-delay="100">

      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div class="carousel-inner" role="listbox">

       
        <div class="carousel-item active" style={tab1}>
          <div class="carousel-container">
            <div class="container">
              <h2 data-aos="fade-down" class="animate__animated animate__fadeInDown">Welcome to <span>Kebron Guest House</span></h2>
              <h3 id="homeaway">Home Away From Home</h3>
              <p data-aos="fade-up"class="animate__animated animate__fadeInUp">Kebron Guest House is a service destination within Addis Ababa where our guests can confidently leave every detail to us, so they can focus on what matters to them most during their stay with us.</p>
              <a data-aos="fade-up" href="/rooms" class="btn-get-started animate__animated animate__fadeInUp scrollto">Get a Room</a>
            </div>
          </div>
        </div>

       
        <div class="carousel-item" style={tab2}>
          <div class="carousel-container">
            <div class="container">
              <h2 data-aos="fade-down" class="animate__animated animate__fadeInDown">Spa</h2>
              <p data-aos="fade-up"class="animate__animated animate__fadeInUp">Indulge in our Spa's fine selection of skin-care treatments. Relax and rejuvenate from head to toe while taking advantage of our exquisite facilities.</p>
              
            </div>
          </div>
        </div>

      
        <div class="carousel-item" style={tab3}>
          <div class="carousel-container">
            <div class="container">
              <h2 data-aos="fade-down" class="animate__animated animate__fadeInDown">Gym and Wellness Center</h2>
              <p data-aos="fade-up" class="animate__animated animate__fadeInUp">Enjoy a complete workout at our 24-hour fitness center facilities offering everything you would expect in state-of-the-art equipment.</p>
              <a data-aos="fade-up" href="/gym" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
        </div>

      </div>

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" dataw-slide="next">
        <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>

      

    </div>
  </section>
  
  </>);
    
}


