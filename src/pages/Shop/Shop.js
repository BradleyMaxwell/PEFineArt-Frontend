import React from 'react'
import styled from 'styled-components'
import useFetch from '../../hooks/useFetch'
import ProductCard from '../../features/shop/components/ProductCard'

export default function Shop() {
  const { data: products } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/shop`)

  return (
    <Container className='max-width-container'>
        <Header>My Shop</Header>

        <CardsContainer>
          {products && products.map(product =>
            <ProductCard productDetails={product} />
          )}
        </CardsContainer>
    </Container>
  )
}

const Container = styled.main`
`

export const Header = styled.h2`
  margin: 50px;
  text-align: center;
`

const CardsContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 50px;
`