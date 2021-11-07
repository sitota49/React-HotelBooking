import React, { Component } from 'react'

import { PagesContext } from '../pagesContext';

import Navbar from '../components/Navbar';


export default class SinglePage extends Component {
    constructor (props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
          
        };
    }
    static contextType = PagesContext;
    render() {
        console.log("hello",this.context);
        const { getPage } = this.context;
        const page = getPage(this.state.slug);
        if(!page){
            return (
            <div className="container pageerror">
                    <div className="row my-5">
                        <div className="col-md-6 col-12 mx-auto">
                            <div className="card shadow-lg border-0 p-4 error">
                                <h1 className="text-center display-4">SORRY</h1>
                                <h3>No such page could be found...</h3>
                               
                            </div> 
                        </div>
                    </div>
                </div>);
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = page;
        const [mainImg, ...defaultBcg] = images;
        return (
    
            <>
            <Navbar />
            <section class="breadcrumbs">
                <div class="container bookNowContainer">

                    <h2>{`${name}`}</h2>

                </div>
            </section>

            <section id="portfolio-details" class="portfolio-details">
      <div class="container">

        <div class="row gy-4">

          <div class="col-6">
          
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
              
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
          <div className="col-6 text-center justify-content-center align-self-center">
                     
                      <p>{description}</p>
          </div>

          


        </div>
        
               

      </div>
    </section>
            </>
        )
    }
}
