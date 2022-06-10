import React from "react";
import Menu from "../../components/Menu/Menu";
import { Container, Title, Separator,ProductContainer, CartInfo, Order, Tax, Qty, Total } from "./styles";
import ProductBox from '../../components/ProductBox/ProductBox';

let cart=[];

if(localStorage.getItem('cart')){
    cart= JSON.parse( localStorage.getItem('cart') ).value;
}
console.log(localStorage.getItem('cart'));

export default function Cart() {
    return (
        <Container>
            <Menu />
            <Title>CART</Title>
            <Separator />
            <ProductContainer>
                {cart.map( product => <div id={product.id + '__big'}>
                    <ProductBox>{product}</ProductBox> 
                    <CartInfo>
                        <Tax>Tax 21%: </Tax>
                        <Qty>Qty: {cart.length}</Qty>
                        <Total>Total: </Total>
                        <Order>ORDER</Order>
                    </CartInfo>
                </div>)}
            </ProductContainer>
        </Container>
    )
}