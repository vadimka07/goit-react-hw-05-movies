import { searchMovies } from '../../services/api';
import { useEffect, useState } from 'react';
import SearchForm from '../../components/Forms/SearchForm';
import { useLocation, useSearchParams } from 'react-router-dom';
import GoBack from '../../components/GoBack/GoBack';
import MoviesList from '../../components/MoviesList/MoviesList';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams('');
    const location = useLocation();

    useEffect(() => {
        const searchQuery = searchParams.get('search');
        if (!searchQuery) {
            return;
        }
        const getFormData = async () => {
            const result = await searchMovies(searchQuery);
            setMovies(result);
        };
        getFormData().catch(console.error);
    }, [searchParams]);

    return (
        <>
            <GoBack path={location?.state?.from ?? '/'} />
            <SearchForm onSubmit={setSearchParams} />
            {movies.length > 0 && <MoviesList movies={movies} />}
        </>
    );
}

export default Movies;
