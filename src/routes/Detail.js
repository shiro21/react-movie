import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

const Detail = () => {
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState({});

    const { id } = useParams();

    const getMovie = useCallback(async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);

        const json = await response.json();

        setMovieDetail(json.data.movie);
        setLoading(false);
        console.log(json.data.movie)
    }, [id])

    useEffect(() => {
        getMovie();
    }, [getMovie])


    // useEffect(() => {
    //     const getMovie = async () => {
    //         const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    
    //         const json = await response.json();
    
    //         setMovieDetail(json.data.movie);
    //         setLoading(false);
    //     };

    //     getMovie();
    // }, [id])

    return (
        <>
            {
                loading ? 
                <h1>Loading ...</h1>
                :
                (
                    <MovieDetail
                        key={movieDetail.id}
                        id={movieDetail.id}
                        date={movieDetail.date_uploaded}
                        background={movieDetail.large_cover_image}
                        count={movieDetail.download_count}
                        title={movieDetail.title}
                        genres={movieDetail.genres}
                        decription={movieDetail.description_full}
                    />
                )
            }
        </>
    );
}

export default Detail;