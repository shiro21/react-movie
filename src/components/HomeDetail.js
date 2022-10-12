import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "../styles/Home.module.scss";

const Movie = ({ id, coverImg, title, summary, genres }) => {
    return (
        <section className={`${style.home_contents} ${style.two_test}`}>
            <div className={style.home_line}>
                <div className={style.home_img}>
                    <img src={coverImg} alt={title} />
                </div>

                <h1><Link to={`/movie/${id}`}>{title}</Link></h1>

                <p>{summary}</p>

                <div>
                    <ul>
                        <li>Tag : </li>
                        {
                            genres.map((genre, gIndex) => (
                                <li key={gIndex}>{genre}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default Movie;