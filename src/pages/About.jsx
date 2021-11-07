import React from 'react'

import Testimonals from '../components/Testimonals'
import Counts from '../components/Counts';
function About() {
    return (
        <>
    <div className="container aboutus bookNowContainer ">
        <div className="bookNowContainer">
        <div className="row bookNowContainer ">
            <div className="col-md-6 col-12 my-auto bookNowContainer">
                <img src="assets/img/3Z3A3063.JPG" alt="about us" className="img-fluid bookNowContainer" />
            </div>
            <div className="col-md-6 col-12 my-auto bookNowContainer">
                <h1 className="display-4 text-center my-5">About Us </h1>
                <p className="lead text-justify text-center">
                    Kebron Guest House is a service destination within Addis Ababa where our guests can confidently leave every detail to us, so they can focus on what matters to them most during their stay with us.
                    </p>
                <div className="text-center col-md-6 col-12 mx-auto">
                    <a href="/home#contact" className="btn btn-outline-dark btn-block btn-lg my-5">Contact us</a>
                </div>
            </div>
        </div>
        </div>
        <div className="about_company">
            
            <div className="pt-4">
                <p className="about_info">
                    Kebron guest house is located in Addis Ababa, around Nifas Silk Lafto with an
                     outstanding quality of service. Kebron guest house is not just a 
                     guest house, it’s a complex providing a wide range other attractive services like a gym, hair salon and a spa.
                     We look forward to making your stay an enjoyable experience by providing top-of-the-line
                     facilities, stylish design, and flawless high-quality service. 
                     We offer the best of facilities like 
                     flat-screen LCD TV, free Wi-Fi, tea/coffee making facilities, complimentary toiletries, room service to guarantee guests 
                     maximum comfort and relaxation.
                </p>
            </div>
        </div>
        </div>
        
        <Testimonals />
        <Counts />
      </>
    )
}
export default About;