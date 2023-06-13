import MovieItem from '../MovieItem/MovieItem';
import PropTypes from 'prop-types';

function MoviesList({ movies }) {
    return (
        <ul
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
            }}
        >
            {movies.map(item => {
                return <MovieItem key={item.id} movie={item} />;
            })}
        </ul>
    );
}

export default MoviesList;

MoviesList.propTypes = {
    movies: PropTypes.array,
    movie: PropTypes.object,
};
