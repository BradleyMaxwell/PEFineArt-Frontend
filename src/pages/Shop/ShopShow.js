import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import useFetch from '../../hooks/useFetch'
import ProductImageCarousel from '../../features/shop/components/ProductImageCarousel'
import ProductInfo from '../../features/shop/components/ProductInfo'

export default function ShopShow() {
  const { id } = useParams()
  const { data: product } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/shop/${id}`)
  return (
    <main>
        <Container>
            {product && 
            <ProductContainer>
                <ProductImageCarousel product={product} />
                <ProductInfo product={product} />
            </ProductContainer>
            }
        </Container>
    </main>
  )
}

const Container = styled.main`

`

const ProductContainer = styled.div`
    display: flex;
    height: 100%;
`