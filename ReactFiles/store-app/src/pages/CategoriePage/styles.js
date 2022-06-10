import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Container = styled.div`
    max-width: 100%;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 40px;
    margin: 103px 100px 0px 100px;
    max-width: 100%;
    justify-content: space-around;
`;

export const Box = styled.div`
    width: 366px;
    height: 424px;
    margin-bottom: 103px;

    &:hover{
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }

`;

export const Product = styled.img`
    width: 344px;
    height: 320px;
    margin: 9px 16px 21px 11px;
`;

export const Button = styled.img`
    position: absolute;
    width: 52px;
    height: 52px;
    margin: -45px 0px 0px 290px;
    filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
    visibility: hidden;
    opacity: 0;

    ${Box}:hover & {
        visibility: visible;
        opacity: 1;
        transition: 2s;
    }

`;

export const ProductName = styled.p`
    color: #8D8F9A;
    margin: 0px 40px 45px 15px;
    font-size: 18px;
    line-height: 160%;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
`;

export const ProductPrice = styled.div`
    margin: -35px 40px 0px 15px;
`;

export const Price = styled.p`
    color: #1D1F22;
    font-family: 'Raleway';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
`;

export const Title = styled.h2`
    color: black;
    margin: 40px 0px 0px 80px;
    font-size: 32px;
    
`