import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
    padding: 20px;
    margin: 0;
    display: flex;
    gap: 15px;
    list-style-type: none;
`;

export const NavigationLink = styled(NavLink)`
    text-decoration: none;
    &.active {
        text-decoration: underline;
        color: wheat;
    }
`;
