import { Button, GoBackLink } from './GoBack.styled';

function GoBack({ path }) {
    // console.log(path);
    return (
        <Button>
            <GoBackLink to={path}>&#8592; GO Back</GoBackLink>
        </Button>
    );
}

export default GoBack;
