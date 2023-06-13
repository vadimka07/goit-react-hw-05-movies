import { Button, GoBackLink } from './GoBack.styled';
import PropTypes from 'prop-types';

function GoBack({ path }) {
    return (
        <Button>
            <GoBackLink to={path}>&#8592; GO Back</GoBackLink>
        </Button>
    );
}

export default GoBack;

GoBack.propTypes = {
    path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
