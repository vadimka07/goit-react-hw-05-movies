import Movies from '../pages/Movies/Movies';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { DIV } from './App.styled';

const Home = lazy(() =>
    import(/* webpackChunkName: "Home" */ '../pages/Home/Home')
);
const NotFound = lazy(() =>
    import(/* webpackChunkName: "NotFound" */ '../pages/NotFound/NotFound')
);
const MovieDetails = lazy(() =>
    import(
        /* webpackChunkName: "MovieDetails" */ '../pages/MovieDetails/MovieDetails'
    )
);
const Cast = lazy(() =>
    import(/* webpackChunkName: "Cast" */ '../pages/Cast/Cast')
);
const Reviews = lazy(() =>
    import(/* webpackChunkName: "Reviews" */ '../pages/Reviews/Reviews')
);

export const App = () => {
    return (
        <DIV>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="movies" element={<Movies />} />
                    <Route path="movies/:movieId" element={<MovieDetails />}>
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </DIV>
    );
};
