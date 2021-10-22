import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading';
import Room from './Room';
import Title from './Title'; 

export default class FeaturedRooms  extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, featuredRooms : rooms } = this.context;
        console.log(rooms);
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}/>
        });
        return (
            <>
            <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Featured Rooms</h2>
          <p>Discover tasteful, refined, casual and comfortable guest rooms that meet your long-term needs.</p>
        </div>

        <div class="row">
{loading ? <Loading/> : rooms}
          
         

        

        </div>

      </div>
    </section>
 
           
            </>
        )
    }
}
