import styled from 'styled-components'

export const Container = styled.div`

`;

export const Cart = styled.div`
    cursor: pointer;
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

export const CartOver = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    position: absolute;
    margin: 30px 0px 0px -280px;
    height: auto;
    width: 325px;
`;

export const Name = styled.h3`
    color: #1D1F22;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    margin-top: 32px;
    margin-left: 16px;
`;

export const ProductContainer = styled.div`
    height: auto;
    margin: 32px 16px 41px;
    width: 293px;
`;

export const ProductCard = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 8px;
    margin-bottom: 40px;
    height: auto;
    width: 293px;
`;

export const ProductInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 4px;
    height: auto;
    width: 164px;
`;

export const ProductAttributes = styled.div`

`;

export const Title = styled.div`
    color: #1D1F22;
    display: flex;
    flex-wrap: wrap;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
    height: 52px;
    width: 136px;
`;

export const Price = styled.p`
    color: #1D1F22;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    margin-top: -8px;
`;

export const AttributesContent = styled.div`
    height: 100px;
    margin-top: -8px;
    width: 130px;
`;

export const Content = styled.div`
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-row-gap: -18px;
    margin-top: -8px; 
`;

export const AttributeName = styled.h3`
    color: #1D1F22;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin-top: 5px;
`;

export const AttributesItems = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 2px;
    margin-bottom: 8px;
`;

export const Attributes = styled.button`
    background-color: ${(props) => props.color};
    border: 1px solid black;
    color: ${(props) => props.color};
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 140%;
    margin-top: -8px;
    height: 24px;
    width: 24px;
`;

export const ProductQty = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 8px;
`;

export const Quantity = styled.img`
    cursor: pointer;
`;

export const Number = styled.p`
    color: #1D1F22;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    margin-left: 8px;
    margin-top: 7px;
`;

export const ProductGallery = styled.div`
    height: 190px;
    width: 121px;
`;

export const Product = styled.img`
    height: 190px;
    width: 121px;
`;

export const TotalContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 139px;
    height: 28px;
    width: 289px;
`;

export const Total = styled.p`
    color: #1D1F22;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    margin-left: 16px;
`;

export const TotalPrice = styled.p`
    color: #1D1F22;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    margin-left: 60px;
`;

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 12px;
    height: 43px;
    margin: 32px 16.5px; 
    width: 292px;
`;

export const ViewBag = styled.button`
    background-color: #FFFFFF;
    border: 1px solid #1D1F22;
    color: #1D1F22;
    cursor: pointer;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    text-transform: uppercase;
    height: 43px;
    width: 140px;
`;

export const CheckOut = styled.button`
    background-color: #5ECE7B;
    border: none;
    color: #FFFFFF;
    cursor: pointer;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    text-transform: uppercase;
    height: 43px;
    width: 140px;
`;