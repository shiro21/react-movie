import { useEffect, useState } from "react";
import Movie from "../components/HomeDetail";
import style from "../styles/Home.module.scss";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  
    const getMovies = async () => {
      const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5&sort_by=year`);
  
      const json = await response.json();
  
      setMovies(json.data.movies);
      setLoading(false);
    }
  
    useEffect(() => {
      getMovies();
    }, [])
  
    return (
        <div>{loading ? <h1>Loading ...</h1> : (
        <article id={style.home}>
            {movies.map((movie) => (
            <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
            />
            ))}
        </article>
        )}</div>
    );
}

export default Home;