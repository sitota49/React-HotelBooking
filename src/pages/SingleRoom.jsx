import React, { Component } from 'react'
import defaultBcg from '../images/room-3.jpeg';

import { Link } from 'react-router-dom';
import { RoomContext } from '../context';

import Navbar from '../components/Navbar';


export default class SingleRoom extends Component {
    constructor (props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return (
            <div className="container roomerror">
                    <div className="row my-5">
                        <div className="col-md-6 col-12 mx-auto">
                            <div className="card shadow-lg border-0 p-4 error">
                                <h1 className="text-center display-4">SORRY</h1>
                                <h3>No such room could be found...</h3>
                                <Link to="/rooms" className="btn btn-warning mt-4 ">Back to Rooms</Link>
                            </div> 
                        </div>
                    </div>
                </div>);
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        const [mainImg, ...defaultBcg] = images;
        return (
    
            <>
            <Navbar />
            <section class="breadcrumbs">
                <div class="container bookNowContainer">

                    <h2>{`${name} room`}</h2>

                </div>
            </section>

            <section id="portfolio-details" class="portfolio-details">
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-8">
          
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={mainImg} height={400} alt=""/>
                    </div>
                     {defaultBcg.map((item,index) => {
                        return (
                        <>
                        <div class="carousel-item" key={index}>
                       
                               <img key={index} src={item} alt={name} className="img-fluid" />
                            </div>
                        </>)
                    })}
                   

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

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Room Inofrmation</h3>
              <ul>                 
                <li><strong>Price</strong>: {price} ETB</li>
                <li><strong>Size</strong>: {size} Sqft</li>
                <li><strong>Max. Capacity</strong>: {capacity > 1 ? `${capacity} people`: `${capacity} person`}</li>
                <li>{pets? 'Pets allowed': 'No pets allowed'}</li>
                <li> {breakfast && 'Free breakfast included'}</li>
              </ul>
            </div>

            <div class="portfolio-description">
              <h2>Extras</h2>
             <ul className="extras">
                    {extras.map((item,index) => {
                          return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
          </div>

        </div>
         <div class="row roomDetails portfolio-description">
                      <h2>Details</h2>
                      <p>{description}</p>
                  
                     

                          <a href={`/booknow/${this.state.slug}`} class="get-started-btn ">Book Now</a>
                     
        </div>
               

      </div>
    </section>
            </>
        )
    }
}
