import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import styled, { createGlobalStyle }from "styled-components";
import MoviesSearch from './Components/MoviesSearch'
import MovieInfo from './Components/MovieInfo'
import MovieCard from './Components/MovieCard'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #222;
    margin:0;
  }
  `
const Overlay=styled.div`
position: fixed;
display: ${props => props.display ? 'block' : 'none'};
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(255,255,255,0.5);
z-index: 2;
cursor: pointer;
padding: 60px;
overflow: auto;
`;

function App() {
  const [display, setDisplay] = useState(true)
  const [movieTitle, setMovieTitle] = useState("")
  const [movieList, setMovieList] = useState([])
  const [MovieClick, setMovieClick  ]=useState('')
  
  const updateClick=(data)=>{
    setMovieClick(data)
  }

  const updateTitle=(data)=>{
    setMovieTitle(data)
  }

    const updateList=(data)=>{
        setMovieList(data)
    }

  return (
<>
  <GlobalStyle whiteColor />
      <header className="App-header">
           <MoviesSearch title={movieTitle} updateTitle={updateTitle} updateList={updateList} />
      </header>
     
      <div className="flex flex-row justify-evenly flex-wrap  mt-4 p-20">
      {movieList?.length
      ?movieList.map((item)=> <MovieInfo key={item.imdbID} item={item} updateClick={updateClick}  SetDisplay={setDisplay}/>)
      :<div className="text-purple-600 text-xl" >{`No Movies Yet Search...`}</div>
         }
         </div>
      {MovieClick && <Overlay display={display} ><MovieCard movieClick={MovieClick}  SetDisplay={setDisplay} /></Overlay>}
      </>
    
  );
}

export default App;
