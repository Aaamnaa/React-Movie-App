
import React from 'react';

export default function MoviesSearch(props) {
    
    const searchMovie = async(e) => {
        e.preventDefault()
        // const url = `http://www.omdbapi.com/?i=tt3896198&apikey=f6370672=${movieTitle}`

        // const response = await fetch(url)
        // const data= await response.json()
        try {
          const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f6370672&s=${props.title}`);
          const data = await response.json();
    
          console.log(data); // Log the actual data received from the API
    
          // Check if the 'Search' property exists in the data
          (data && data.Search)?props.updateList(data.Search):props.updateList([]);
          }
        catch (error) {
          // Handle any errors that occur during the API call
          console.error("Error fetching movie data:", error);
        }
                //
    }

    return (
        <>
    <div className="flex flex-row mt-3.5 justify-between bg-gray-800">
    <div className="absolute top-0 left-0 ml-2.5 mt-2.5">Movie Search App</div>
  <form  className="flex absolute top-0 right-0 mr-2.5 mt-2.5" method="GET" onSubmit={searchMovie}>
    
    <div className="relative  text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline" >
          <svg fill="none" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          className="w-6 h-6">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" 
      name="q" 
      className="py-2 text-md text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-30 sm:w-96" 
      placeholder="Search..." 
      autoComplete="off"
      value = {props.title}
      onChange={(e)=>{props.updateTitle(e.target.value)}}
      />
   
    </div>
  </form>
</div>
</>
      
    )
}