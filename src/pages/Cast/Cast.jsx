import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchMovieCredits } from '../../services/api';
import noPhoto from '../../assets/images/No-Image.png';
import { ActorsList, ActorsListItem } from './Cast.styled';

function Cast() {
    const { movieId } = useParams();
    const [casts, setCasts] = useState([]);
    useEffect(() => {
        searchMovieCredits(movieId).then(data => {
            setCasts(data.cast);
        });
    }, [movieId]);

    return (
        <>
            <ActorsList>
                {casts.map(({ id, name, profile_path }) => {
                    const photo = profile_path
                        ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                        : noPhoto;
                    return (
                        <ActorsListItem key={id}>
                            <img src={photo} alt="" />
                            {name}
                        </ActorsListItem>
                    );
                })}
            </ActorsList>
        </>
    );
}

export default Cast;
