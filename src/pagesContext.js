import React, { Component } from 'react'
import items from './data2';
import AOS from 'aos';
import 'aos/dist/aos.css';
const PagesContext = React.createContext();

class PagesProvider extends Component {
    state={
        pages: [],
        // sortedRooms: [],
        // featuredRooms: [],
        // loading: true,
        // type: 'all',
        // capacity: 1,
        // price: 0,
        // minPrice: 0,
        // maxPrice: 0,
        // minSize: 0,
        // maxSize: 0,
        // breakfast: false,
        // pets: false
    };
    componentDidMount(){
          AOS.init({
      duration : 2000
    })
        let pages = this.formatData(items);
        // let featuredRooms = rooms.filter(room => room.featured === true);
        // let maxPrice = Math.max(...rooms.map(item => item.price));
        // let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
            pages,
            // featuredRooms,
            // sortedRooms:rooms,
            loading: false,
            // price : maxPrice,
            // maxPrice,
            // maxSize
        })
    }
    formatData(items){
        let tempItems = items.map(item =>{
        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);
        let page = {...item.fields,images,id}
        return page;    
        });
        return tempItems;
    }
    getPage = (slug) => {
        let tempPages = [...this.state.pages];
        const page = tempPages.find((page)=>page.slug === slug);
        return page;
    }
    // handleChange = event => {
    //     const target = event.target;
    //     const value = target.type ==='checkbox' ? target.checked:target.value;
    //     const name = event.target.name;
    //     this.setState(
    //     {
    //         [name]: value
    //     },this.filterRooms)
    // }
    
    // filterRooms = () => {
    //     let{
    //         rooms,type,capacity,price,minSize,maxSize,breakfast,pets
    //     }= this.state
    //     // for all the rooms
    //     let tempRooms = [...rooms];

    //     //transform value
    //     capacity = parseInt(capacity)
    //     price = parseInt(price)

    //     //filter by type
    //     if(type !=='all'){
    //         tempRooms = tempRooms.filter(room => room.type === type)
    //     }
    //     //filter by capacity
    //     if(capacity !==1){
    //         tempRooms = tempRooms.filter(room => room.capacity >= capacity)
    //     }
    //     //filter by price
    //     tempRooms = tempRooms.filter(room => room.price <= price);
        
    //     //filter by size
    //     tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

    //     //filter by breakfast
    //     if(breakfast){
    //         tempRooms = tempRooms.filter(room => room.breakfast === true)
    //     }
    //     //filter by pets
    //     if(pets){
    //         tempRooms = tempRooms.filter(room => room.pets === true)
    //     }
    //     //change state
    //     this.setState({
    //         sortedRooms: tempRooms
    //     })
    // }
    render() {
        return (
            <PagesContext.Provider value={{ ...this.state, getPage: this.getPage }}>
                {this.props.children}
            </PagesContext.Provider>
        )
    }
}
const PageConsumer = PagesContext.Consumer;

export function withPageConsumer(Component){
    return function ConsumerWrapper(props){
        return <PageConsumer>
            {value => <Component {...props} context={value} />}
        </PageConsumer>
    }
}


export{PagesProvider,PageConsumer,PagesContext}
     