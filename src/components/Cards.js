import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
    let shows = props.shows;
   
    const [likedShows, setLikedShows] = useState([]);
    
    function getShows() {
        if(true) {
            let allShows = [];
            Object.values(shows).forEach(array => {
                array.forEach(showsData => {
                    allShows.push(showsData);
                })
            })
            return allShows;
        }
        
    }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getShows().map( (shows) => (
            <Card key={shows.show.id} 
            shows = {shows} 
            likedShows={likedShows}
            setLikedShows={setLikedShows}/>
        ))
      }
    </div>
  )
}

export default Cards