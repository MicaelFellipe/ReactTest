import styled from 'styled-components'

export const Container = styled.div`
    max-width: 100%;
`;

export const ProductMedia = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 100px;
    height: 513px;
    max-width: 1124px;
    margin: 73px 100px 158px 100px;
`;

export const Product = styled.img`
    height: 411px;
    width: 490px;
`;

export const ViewProduct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 311px;
    width: 79px;
`;

export const ViewItem = styled.img`
    height: 80px;
    width: 79px;
`;

export const ProductInfo = styled.div`
    height: 513px;
    width: 292px;
`;

export const ProductBrand = styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
`;

export const ProductName = styled.h3`
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
`;

export const ProductAttributes = styled.div`
    width: 300px;
`;

export const AttributeName = styled.h3`
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

export const ProductDescription = styled.p`
    font-size: 16px;
`;

export const AddCart = styled.button`
    background-color: #5ECE7B;
    border: none;
    color: #FFFFFF;
    cursor: pointer;
    height: 42px;
    width: 292px;
`;