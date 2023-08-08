import axios from "axios";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';


export default function MovieCard({movieClick, SetDisplay}) {
  const [MovieInfo, setMovieInfo  ]=useState()

  useEffect(()=>{
    axios
    .get(`http://www.omdbapi.com/?i=${movieClick}&apikey=f6370672`)
    .then(response =>  setMovieInfo(response.data))
  },[movieClick]) 

      return (
   <div className="card flex w-fit sm:w-auto h-100 p-10 mb-20 mx-0 sm:mx-10 border bg-purple-400 text-black-600 rounded-lg shadow hover:shadow-lg">
  <div className="flex justify-end absolute right-2 top-2">
    <FontAwesomeIcon icon={faTimes} size="2x" color="purple" onClick={() => { SetDisplay(false) }} />
  </div>
  <div className="flex flex-col md:flex-row">
    <img className="md:w-48 rounded-t-lg mx-auto w-fit h-80 object-cover" src={MovieInfo?.Poster} alt={MovieInfo?.Title} />
    <div className="md:ml-6 md:mt-0 mt-4">
      <h1 className="text-xl font-bold">{`Movie: ${MovieInfo?.Title}`}</h1>
      <h3 className="text-md font-semibold">{`IMDB Rating: ${MovieInfo?.imdbRating}`}</h3>
      <h3 className="text-md font-semibold">{`Type: ${MovieInfo?.Type}`}</h3>
      <h3 className="text-md font-semibold">{`Year: ${MovieInfo?.Year}`}</h3>
      <h3 className="text-md font-semibold">{`Language: ${MovieInfo?.Language}`}</h3>
      <h3 className="text-md font-semibold">{`Rated: ${MovieInfo?.Rated}`}</h3>
      <h3 className="text-md font-semibold">{`Released: ${MovieInfo?.Released}`}</h3>
      <h3 className="text-md font-semibold">{`Runtime: ${MovieInfo?.Runtime}`}</h3>
      <h3 className="text-md font-semibold">{`Genre: ${MovieInfo?.Genre}`}</h3>
      <h3 className="text-md font-semibold">{`Director: ${MovieInfo?.Director}`}</h3>
      <h3 className="text-md font-semibold">{`Actors: ${MovieInfo?.Actors}`}</h3>
      <h3 className="text-md font-semibold">{`Plot: ${MovieInfo?.Plot}`}</h3>
    </div>
  </div>
</div>


           
     )
    }
