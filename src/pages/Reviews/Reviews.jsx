import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchMovieReviews } from '../../services/api';

function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        searchMovieReviews(movieId).then(data => {
            setReviews(data.results);
        });
    }, [movieId]);

    if (!reviews.length) {
        return <p>We don't have any reviews for movie</p>;
    }
    return (
        <>
            <ul>
                {reviews.map(({ id, author_details, content }) => {
                    return (
                        <li key={id}>
                            <strong>Author: {author_details.username}</strong>
                            <p>{content}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Reviews;
