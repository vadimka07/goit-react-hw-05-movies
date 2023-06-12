import { Link, useLocation } from 'react-router-dom';

function MovieItem({ movie }) {
    const location = useLocation();
    const { title, id } = movie;
    return (
        <li>
            <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
            </Link>
        </li>
    );
}

export default MovieItem;
