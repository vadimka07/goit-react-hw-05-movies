import { useState } from 'react';
import { FormSearch } from './SearchForm.styled';

function SearchForm({ onSubmit }) {
    const [queryString, setQueryString] = useState('');

    function handleValue(e) {
        setQueryString(e.currentTarget.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({ search: queryString });
    }

    return (
        <FormSearch onSubmit={handleSubmit}>
            <input type="text" value={queryString} onChange={handleValue} />
            <button type="submit">Search</button>
        </FormSearch>
    );
}

export default SearchForm;
