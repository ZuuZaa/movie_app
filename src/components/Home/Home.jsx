import { MovieListing } from "components/MovieListing";
import { useEffect } from "react";
import MovieApi from 'common/api/movieAPI';
import { ApiKey } from "common/api/movieApiKey";

export const Home = () => {

useEffect(()=>{
    const movieText = "Harry";
    const fetchMovies = async ()=>{
        const response = await MovieApi
        .get(`?apikey=${ApiKey}&s=${movieText}&type=movie`)
        .catch(err => console.log("error", err));
        console.log(response);
    }
    fetchMovies();
},[])

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    )
}