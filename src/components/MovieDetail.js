import style from "../styles/Detail.module.scss";
import PropsTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import React from 'react';


const MovieDetail = ({ id, date, background, count, title, genres, decription }) => {
    const navigate = useNavigate();
    const onClick = () => {
        console.log(navigate(-1));
    }
    return (
        <article className={style.movie_contents}>
            <h1>
                {title} <span>ID Number: {id}</span>
                <button className={style.colse} onClick={onClick}>닫기</button>
            </h1>

            <div className={style.movie_item}>
                {/* url로 사용하는 방법 */}
                {/* <div className={style.movie_img} style={{backgroundImage: `url(${background})`}}></div> */}
                <div className={style.movie_img}>
                    <img src={background} alt={title} />
                </div>

                <div className={style.movie_info}>
                    <h2>{title} <span>download: {count}</span></h2>

                    <div className={style.movie_created}>
                        {date}
                    </div>

                    <div className={style.movie_genre}>
                        <ul>
                            <li>장르: </li>
                            {
                                genres.map((genre, index) => {
                                    return <li key={index}>{genre}</li>;
                                })
                            }
                        </ul>
                    </div>

                    <p className={style.movie_description}>
                        {decription}
                    </p>
                </div>

            </div>
        </article>
    );
};

MovieDetail.propsTypes = {
    id: PropsTypes.number.isRequired,
    date: PropsTypes.string.isRequired,
    background: PropsTypes.string.isRequired,
    count: PropsTypes.number.isRequired,
    title: PropsTypes.string.isRequired,
    genres: PropsTypes.arrayOf(PropsTypes.string.isRequired),
    decription: PropsTypes.string.isRequired
}

export default MovieDetail;