import { getPopularMovies } from '../../services/api';
import { useEffect, useState } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import PropTypes from 'prop-types';

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then(data => {
            setMovies(data);
        });
    }, []);
    return (
        <>
            <h1 style={{ color: 'red' }}>Home</h1>
            {movies.length > 0 && <MoviesList movies={movies} />}
        </>
    );
}

export default Home;

Home.propTypes = {
    movies: PropTypes.array,
};
