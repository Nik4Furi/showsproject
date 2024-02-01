import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
    let shows = props.shows;
    let likedShows = props.likedShows;
    let setLikedShows = props.setLikedShows;

    function clickHandler() {
        //logic
        if(likedShows.includes(shows.id)) {
            //pehle se like hua pada tha
            setLikedShows( (prev) => prev.filter((cid)=> (cid !== shows.id) )  );
            toast.warning("like removed");
        }
        else {
            //pehle se like nahi hai ye shows
            //insert karna h ye course liked shows me 
            if(likedShows.length === 0 ) {
                setLikedShows([shows.id]);
            }
            else {
                //non-empty pehle se
                setLikedShows((prev) => [...prev, shows.id]);
            }
            toast.success("Liked Successfully");
        }
    }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={shows.image.url} alt='images'/>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedShows.includes(shows.id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
            </div>
        </div>
        

        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{shows.name}</p>
            <p className='mt-2 text-white'>
                    {
                        shows.summary.length >100 ? 
                        (shows.summary.substr(0,100)) + "..." :
                        (shows.summary)
                    }
            </p>
        </div>
    </div>
  )
}

export default Card
