import React, { useState } from "react";
import { Container, Cart, NumberInCart, CartOver, Name, ProductContainer, ProductCard, ProductInfo, ProductAttributes, Title, Price, AttributesContent,
    Content, AttributeName, AttributesItems, Attributes, ProductQty, Quantity, Number, ProductGallery, Product, TotalContainer, Total, TotalPrice, Buttons, 
    ViewBag, CheckOut } from "./styles"; 
import {ReactComponent as CartSVG} from "../../assets/img/cart.svg";
import minus from '../../assets/img/minusSquare2.png';
import plus from '../../assets/img/plusSquare2.png';
import { Link } from "react-router-dom";
import removeProduct from "../RemoveProductInCart/RemoveProductInCart";

export default function CartOverlay(){

    const [drop, setDrop] = useState(false);
 
    function handleContent() {
        setDrop(!drop);
    }

    let cart=[];

    if(localStorage.getItem('cart')){
        cart= JSON.parse( localStorage.getItem('cart') ).value;
    }
    console.log(localStorage.getItem('cart'));

    return (
        <Container>
            <Cart onClick={handleContent}>
                <CartSVG /><NumberInCart><p>0</p></NumberInCart>
            </Cart>
            {drop && cart.map( product => {
                console.log(product)
                return(
                    <div id={product.id + '__small'}>
                        <DropCart>{product}</DropCart>
                    </div>
                )
            })}
        </Container>
    )
}

    function DropCart(props){

        const [count, setCount] = useState(1);

        function decreaseCount(productId, productHtml){
            console.log(productHtml);
            if(count != 1) {
                setCount( count - 1 )
            } else {
                console.log('remove', productId)
                removeProduct(productId);
            }
        }
    
        return (
            <CartOver>
                    <Name>My Bag, 1 items</Name>
                    <ProductContainer>
                        <ProductCard>
                            <ProductInfo>
                                <ProductAttributes>
                                    <Title>{props.children.brand} {props.children.name}</Title>
                                    <Price>$50.00</Price>
                                    <AttributesContent> 
                                        {props.children.attributes.map((attributes) => {
                                                return (
                                                    <Content>
                                                        <AttributeName>{attributes.id}</AttributeName>
                                                        <AttributesItems>{attributes.items.map((items) => {
                                                            return(
                                                                <Attributes color={items.value}>{items.id}</Attributes>
                                                            )
                                                    })}</AttributesItems>
                                                    </Content>
                                                )
                                            })} 
                                    </AttributesContent>
                                </ProductAttributes>
                                <ProductQty>
                                    <Quantity src={plus} onClick={() => setCount(count + 1)}/>
                                    <Number>{count}</Number>
                                    <Quantity src={minus} onClick={(event) => decreaseCount(props.children.id, event)}/>
                                </ProductQty>
                            </ProductInfo>
                            <ProductGallery>
                                <Product src={props.children.gallery} />
                            </ProductGallery>
                        </ProductCard>
                    </ProductContainer>
                    <TotalContainer>
                        <Total>Total</Total>
                        <TotalPrice>$200.00</TotalPrice>
                    </TotalContainer>
                    <Buttons>
                        <Link to="/cart">
                            <ViewBag>View Bag</ViewBag>
                        </Link>
                        <CheckOut>Check out</CheckOut>
                    </Buttons>
            </CartOver>
        )
    }