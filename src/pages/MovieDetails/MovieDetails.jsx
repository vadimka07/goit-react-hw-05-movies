import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import { useEffect, useState } from 'react';
import GenresList from '../../components/GenresList/GenresList';
import GoBack from '../../components/GoBack/GoBack';
import { DIV, Thumb } from './MoviesDetails.styled';
import noPhoto from '../../assets/images/no-image-500.png';

function MovieDetails() {
    const { movieId } = useParams();
    const [detailMovie, setDetailMovie] = useState(null);
    const location = useLocation();
    const backLink = location.state?.from ?? '/';
    useEffect(() => {
        const getDetails = async () => {
            const result = await getMovieDetails(movieId);
            setDetailMovie(result);
        };
        getDetails().catch(error => console.log(error));
    }, [movieId]);

    if (!detailMovie) return;

    const { backdrop_path, vote_average, overview, genres, title } =
        detailMovie;
    return (
        <>
            <GoBack path={backLink} />
            <DIV>
                <Thumb>
                    <img
                        src={
                            backdrop_path
                                ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                                : noPhoto
                        }
                        alt={title}
                    />
                </Thumb>
                <div className="container-text">
                    <h1>{title}</h1>
                    <p className="user score">{vote_average}</p>
                    <h2>
                        <strong>Overview</strong>
                    </h2>
                    <p className="description">{overview}</p>
                    <h2>Genres</h2>
                    <GenresList list={genres} />
                </div>
            </DIV>
            <h2>Additional information</h2>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
}

export default MovieDetails;
