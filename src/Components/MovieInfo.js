
import React from 'react';

export default function MovieInfo({item,updateClick, SetDisplay }) {
    

     return (
      
        <div className="card inline-block w-60 h-100  mb-20 mx-10  border bg-purple-400 p-2 text-black-600  rounded-lg shadow hover:shadow-lg"
        onClick={() => {updateClick(item.imdbID);SetDisplay(true);}}>
          <img className="rounded-t-lg mx-auto w-full h-80 object-cover" src={item.Poster}  alt={item.Title}/>
          <div className="text-left mt-4">
            <h2 className="text-lg font-bold">{item.Title}</h2>
            <div className="text-black-600 flex flex-row justify-between ">
            <div className="font-semibold">{`Year: ${item.Year}`}</div>
            <div className="font-semibold">{`Type: ${item.Type}`}</div>
            </div>
          </div>
        </div>
      
           
     )
    }