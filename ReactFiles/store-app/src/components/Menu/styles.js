import styled from "styled-components"

export const Bar = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 80px;
`;

export const Navegation = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 56px;
    max-width: 234px;
    margin-left: 32px;
`;

export const Categories = styled.ul`
    list-style: none;
    display: flex;
    text-transform: uppercase;
    justify-content: flex-start;
`;

export const CategoriesName = styled.li`
    margin: 14px 5px 0px 12px;
`;

export const Logo = styled.img`
    margin: 20px 0px 21px 194px;
    height: 29px;
    width: 31px;        
`;

export const Action = styled.div`
    ul{
        display: flex;
        justify-content: flex-end;
        margin-right: 81px;
        margin-top: 25px;
        list-style: none;
    }

    li{
        padding: 0px 12px 0px 12px;
    }
`;

export const NumberInCart = styled.span`
    background-color: #1D1F22;
    border-radius: 60px;
    position: absolute;
    left: 92.7%;
    right: 88px;
    top: 25px;
    height: 20px;
    width: 20px;

    p{
        position: absolute;
        left: 6px;
        right: 50px;
        top: -15px;
        bottom: 47.32%;
        color: #FFFFFF;
    }
`;