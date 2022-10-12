import style from "../styles/Detail.module.scss";
import PropsTypes from "prop-types";

const onClick = () => {
    console.log('뒤;로가기');
}

const MovieDetail = ({ id, date, background, count, title, genres, decription }) => {

    return (
        <article className={style.movie_contents}>
            <button onClick={onClick}>닫기</button>
            <h1>{title} <span>ID Number: {id}</span></h1>

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

MovieDetail.PropsTypes = {
    id: PropsTypes.number.isRequired,
    date: PropsTypes.string.isRequired,
    background: PropsTypes.string.isRequired,
    count: PropsTypes.number.isRequired,
    title: PropsTypes.string.isRequired,
    genres: PropsTypes.arrayOf(PropsTypes.string.isRequired),
    decription: PropsTypes.string.isRequired
}

export default MovieDetail;