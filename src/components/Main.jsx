import {useState, useEffect} from "react";
// import { useEffect } from "react/cjs/react.development";
import Card from "./Card";
let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
const Main=()=>{
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [search,setSearch]=useState("");
    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setData(data.results);
        });
    },[url_set])

    
    const searchMovie=(evt)=>{
        if(evt.key=="Enter")
        {
            url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
            setUrl(url);
            setSearch(" ");
        }
    }
    return(
        <>
            <div className="header">
                <nav>
                    <button>MyTextApp</button>
                </nav>
            </div>
            <div className="movie-background">
                <p>Watch <br /> something <br/> incredible.</p>
                <img src="../images/Rectangle 5.png" alt="Background"/>
            </div>
            <div className="form-container">
            <p>Search</p>
            <form>
                <div className="search-btn">
                    <input type="text" placeholder="Enter Movie Name" 
                    className="inputText" onChange={(e)=>{setSearch(e.target.value)}} 
                    value={search} onKeyPress={searchMovie}/>
                </div>
                </form> 
            </div>
            <div className="container">
                {
                    (movieData.length==0)?<p className="notfound">Not Found</p>: movieData.map((res,pos)=>{
                        return(
                            <Card info={res} key={pos}/>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Main;