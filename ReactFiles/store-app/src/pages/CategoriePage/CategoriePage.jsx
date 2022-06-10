import React from "react"
import { useCategory } from "../../hooks/useCategory";
import Menu from "../../components/Menu/Menu";
import buyButton from "../../assets/img/circleIcon.png";
import {Container, Section, StyledLink, Box, Product, Button, ProductName, ProductPrice, Price, Title} from "./styles";

export default function CategoriePage() {

    const { error, loading, data } = useCategory();

    if(loading) return <div>spinner...</div>;

    if (error) return <div>something went wrong</div>;


    return (
      <Container>
        <Menu />
        <Title>Category name</Title>
        <Section>
          {data.category.products.map((products) => {
            return ( 
              <StyledLink to={`/${products.id}`}>
                <Box key={products.id}>
                  <Product src={products.gallery} />
                  <Button src={buyButton} />
                  <ProductName>{products.brand} {products.name}</ProductName>
                  <ProductPrice>{products.prices.map((prices) => {
                    return (
                      <Price>{prices.currency.symbol} {prices.amount}</Price>
                    )
                  })}</ProductPrice>
                </Box>
              </StyledLink>
            );
          })}
          </Section>
        </Container>
    )

}
