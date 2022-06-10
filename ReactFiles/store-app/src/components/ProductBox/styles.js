import styled from 'styled-components'

export const Separator = styled.hr`
    border-top: 0px;
    border-left: 0px;
    margin: 55px 70px 0px 80px;
`;

export const Container = styled.div`
    height: auto;
`;

export const ProductCard = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 555px;
    height: 336px;
    max-width: 100%;
    margin-top: 24px;
`;

export const ProductInfo = styled.div`
    margin: 0px 80px 0px 80px;
    width: 276px;
`;

export const ProductBrand = styled.h3`
    color: #1D1F22;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
`;

export const ProductName = styled.h3`
    color: #1D1F22;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
`;

export const ProductPrice = styled.div`
    
`;

export const Price = styled.p`
    color: #1D1F22;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
`;

export const ProductAttributes = styled.div`
    width: 276px;
`;

export const AttributeName = styled.h3`
    color: #1D1F22;
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    text-transform: uppercase;
`;

export const Attributes = styled.button`
    background-color: ${(props) => props.color};
    border: 1px solid #1D1F22;
    color: ${(props) => props.color};
    cursor: pointer;
    justify-content: space-between;
    margin: 0px 12px 12px 0px;
    height: 45px; 
    width: 63px;  
`;

export const ProductMedia = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    margin: 24px 130px 24px 0px;
`;

export const QuantityButtons = styled.div`
    height: 288px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 60px;
`;

export const Quantity = styled.img`
    cursor: pointer;
    height: 45px;
    width: 45px;
`;

export const Number = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    margin-left: 18px;
`;

export const ProductGallery = styled.div`

`;

export const Product = styled.img`
    height: 288px;
    width: 200px;
`;

export const CarouselButtons = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 24px);
    grid-column-gap: 8px;
    margin: -40px 16px 16px 128px;
`;

export const Carousel = styled.img`
    cursor: pointer;
    height: 24px;
    width: 24px;
`;
