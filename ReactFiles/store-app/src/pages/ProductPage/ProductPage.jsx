import React from "react";
import { Container, Product, ProductMedia, ProductInfo, ProductBrand, ProductName, ProductAttributes, AttributeName, Attributes, 
    ProductDescription, ViewProduct, ViewItem, AddCart } from "./styles";
import { useProduct } from "../../hooks/useProduct";
import { useParams } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import addProduct from "../../components/AddProductInCart/AddProductInCart";
import DOMPurify from 'dompurify';
import selectAttributes from "../../components/SelectAttributes/SelectAttributes";

export default function ProductPage() {

    const { id } = useParams();

    const {data, loading, error} = useProduct(id);


    if(error) return <div>something went wrong</div>

    if(loading) return <div>spinner</div>

    const description = data.product.description;


    return (
        <Container>
            <Menu />
            <ProductMedia>
                <ViewProduct>
                    <ViewItem src={data.product.gallery} />
                    <ViewItem src={data.product.gallery} />
                    <ViewItem src={data.product.gallery} />
                </ViewProduct>
                <Product src={data.product.gallery} />
                <ProductInfo>
                    <ProductBrand>{data.product.brand}</ProductBrand>
                    <ProductName>{data.product.name}</ProductName>
                    <ProductAttributes> {data.product.attributes.map((attributes) => {
                            return (
                                <div>
                                    <AttributeName>{attributes.id}</AttributeName>
                                    <div>{attributes.items.map((items) => {
                                        return(
                                            <Attributes color={items.value} onClick={selectAttributes}>{items.id}</Attributes>
                                        )
                                    })}</div>
                                </div>
                            )
                        })}
                    </ProductAttributes>
                    {data.product.prices.map((prices) => {
                        return (
                            <p>{prices.currency.symbol} {prices.amount}</p>
                        )
                    })}
                    <AddCart onClick={() => addProduct(data.product)}>ADD TO CART</AddCart>
                    <ProductDescription dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description)}}></ProductDescription>
                </ProductInfo>
            </ProductMedia>
        </Container>
    )
}