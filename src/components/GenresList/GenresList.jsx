import PropTypes from 'prop-types';

function GenresList({ list }) {
    return list.map(genre => {
        return <li key={genre.id}>{genre.name}</li>;
    });
}

export default GenresList;

GenresList.propTypes = {
    list: PropTypes.array,
};
