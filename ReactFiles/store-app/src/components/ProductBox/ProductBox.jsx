import React, { useState } from "react";
import {
    Separator, Container, ProductCard, ProductInfo, ProductBrand, ProductName, ProductPrice, Price, ProductAttributes, AttributeName, Attributes,
    ProductMedia, QuantityButtons, Quantity, Number, ProductGallery, Product, CarouselButtons, Carousel
} from "./styles";
import plus from '../../assets/img/plusSquare.png';
import minus from '../../assets/img/minusSquare.png';
import left from '../../assets/img/caretLeft.png';
import right from '../../assets/img/caretRight.png';
import removeProduct from "../RemoveProductInCart/RemoveProductInCart";

export default function ProductBox(props) {

    const [count, setCount] = useState(1);

    function increaseCount(product) {
        let cart = localStorage.getItem('cart');

        if (localStorage.getItem('cart')) {
            localStorage.removeItem('cart');
            cart =  JSON.parse(cart).value;
        }

        setCount(count + 1);
        product.quantity = count + 1;
        let productFounded = { product: null, state: false, iProduct: null }
        cart.forEach((productV, iProduct) => {
            if (productV.id == product.id) {
                productFounded.product = productV;
                productFounded.state = true;
                productFounded.iProduct = iProduct;
            }
        })

        if (productFounded.state) {
            cart[productFounded.iProduct] = product;
        }
        localStorage.setItem('cart', JSON.stringify({ value: cart }));

    }

    function decreaseCount(productId, productHtml) {
        console.log(productHtml);
        if (count != 1) {
            setCount(count - 1)

        } else {
            console.log('remove', productId)
            removeProduct(productId);
        }
    }

    return (
        <Container>
            <ProductCard>
                <ProductInfo>
                    <ProductBrand> {props.children.brand} </ProductBrand>
                    <ProductName> {props.children.name} </ProductName>
                    <ProductPrice>
                        {props.children.prices.map((prices) => {
                            return (
                                <Price>{prices.currency.symbol} {prices.amount}</Price>
                            )
                        })}
                    </ProductPrice>
                    <ProductAttributes>
                        {props.children.attributes.map((attributes) => {
                            return (
                                <div>
                                    <AttributeName>{attributes.id}</AttributeName>
                                    <div>{attributes.items.map((items) => {
                                        return (
                                            <Attributes color={items.value}>{items.id}</Attributes>
                                        )
                                    })}</div>
                                </div>
                            )
                        })}
                    </ProductAttributes>
                </ProductInfo>
                <ProductMedia>
                    <QuantityButtons>
                        <Quantity src={plus} onClick={() => increaseCount(props.children)} />
                        <Number>{count}</Number>
                        <Quantity src={minus} onClick={(event) => decreaseCount(props.children.id, event)} />
                    </QuantityButtons>

                    <ProductGallery>
                        <Product src={props.children.gallery} />
                        <CarouselButtons>
                            <Carousel src={right} />
                            <Carousel src={left} />
                        </CarouselButtons>
                    </ProductGallery>
                </ProductMedia>
            </ProductCard>
            <Separator />
        </Container>
    )
}