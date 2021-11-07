import React from 'react';

import jquery from 'jquery';
import logo from '../images/output-onlinepngtools2.png';

// for changing navbar  color
jquery(window).scroll(function() {
jquery('nav').toggleClass('scrolled', jquery(this).scrollTop() > 0);
})

const Navbar = () => {
    return (
  
     
     <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">
      <h1 class="logo mr-auto"><a href="/"><img src={logo} height={35}/>Kebron Guest House<span>.</span></a></h1>
    
      {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt=""></a> */}

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto " href="/home">Home</a></li>
          <li><a class="nav-link scrollto" href="/about">About</a></li>
          <li><a class="nav-link scrollto" href="/rooms">Rooms</a></li>
          
          <li class="dropdown"><a href="#"><span>Spa</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="/services/steamandsauna">Steam & Sauna</a></li>
              <li class="dropdown"><a href="#"><span>Hair Salon</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="/services/kidshairsalon">Kids Salon</a></li>
                  <li><a href="/services/womenhairsalon">Women Salon</a></li>
                  <li><a href="/services/menhairsalon">Men Salon</a></li>
                </ul>
              </li>
              <li><a href="/services/massage">Massage</a></li>
              <li><a href="/services/moroccobath">Morocco Bath</a></li>
              <li><a href="/services/manicureandpedicure">Maincure & Pedicure</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto " href="/gym">Gym</a></li>
          
          <li><a class="nav-link scrollto" href="/home#portfolio">Gallery</a></li>
        
          {/* <li><a class="nav-link scrollto" href="/home#contact">Contact</a></li> */}
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <a href="/rooms" class="get-started-btn scrollto">Book a Room</a>
    </div>
  </header>

     
    
    );
}
export default Navbar;