import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';

export default function Room({room}) {
    const { name , slug, images, price } = room;
    return (
        <>
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="100">
              <div class="member-img">
                 <img src={images[0] || defaultImg} alt="single room" className="img-fluid"/>
                <div class="social">
                 <a href={`/rooms/${slug}`} class="btn-get-started scrollto">Features</a>
                </div>
              </div>
              <div class="member-info">
                <h4>{name}</h4>
                <span>{price} ETB per night</span>
              </div>
            </div>
          </div>


        </>
    )
}
 
Room.propTypes = {
    room: PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}