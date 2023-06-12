import Movies from '../pages/Movies/Movies';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Layout from './Layout/Layout';
import Cast from '../pages/Cast/Cast';
import Reviews from '../pages/Reviews/Reviews';
import { DIV } from './App.styled';

export const App = () => {
    return (
        <DIV>
            <Routes>
                <Route path="/" element={<Layout />}>
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
