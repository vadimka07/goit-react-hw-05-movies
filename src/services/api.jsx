import axios from 'axios';

// const API_KEY = 'Bearer 0237d9ba473aa5050fd328b96c89eb13';
const AUTH_TOKEN =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjM3ZDliYTQ3M2FhNTA1MGZkMzI4Yjk2Yzg5ZWIxMyIsInN1YiI6IjY0N2Y3ZGMyY2E3ZWM2MDBhZGI1NjI2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.okLu2N0ck5no7P-XoAz84wj172q55UHbuP3NPgx3gYA';
const BASE_URL = 'https://api.themoviedb.org';
const POPULAR_MOVIES = '/3/trending/movie/day';
const SEARCH_MOVIES = '/3/search/movie';
const ACTOR_MOVIE = '/3/movie/';

axios.defaults.baseURL = BASE_URL;

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export async function getAllMovies() {
    const { data } = await axios.get('');
    return data;
}

export async function getPopularMovies() {
    const { data } = await axios.get(POPULAR_MOVIES);
    return data.results;
}

export async function getMovieDetails(id) {
    const { data } = await axios.get(`${ACTOR_MOVIE}/${id}`);
    return data;
}

export async function searchMovies(queryString) {
    const { data } = await axios.get(SEARCH_MOVIES, {
        params: { query: queryString },
    });
    return data.results;
}

export async function searchMovieCredits(movieId) {
    const { data } = await axios.get(`${ACTOR_MOVIE}/${movieId}/credits`);
    return data;
}

export async function searchMovieReviews(movieId) {
    const { data } = await axios.get(`${ACTOR_MOVIE}/${movieId}/reviews`);
    return data;
}
