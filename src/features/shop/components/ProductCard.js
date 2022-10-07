import React from 'react'
import styled from 'styled-components'
import useFetch from '../../../hooks/useFetch'
import { ProductType } from '../../adminDashboard/components/form/ShopForm'
import { Link } from 'react-router-dom'

export default function ProductCard({ productDetails }) {
  const { data: artwork } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/gallery/artwork/${productDetails.artwork}`)

  const priceText = () => {
    if (productDetails.productType === ProductType.PRINT) {
      const prices = 
      [
        productDetails.prices.A5.unitPrice, 
        productDetails.prices.A4.unitPrice, 
        productDetails.prices.A3.unitPrice,
        productDetails.prices.A2.unitPrice,
        productDetails.prices.A1.unitPrice
      ]
      return 'Starting from £' + Math.min.apply(null, prices.filter(Boolean)) // returns the lowest non-null number
    } else {
      return '£' + productDetails.prices.Original.unitPrice
    }
  }

  return (
    <Container to={`/shop/${productDetails._id}`}>
      {artwork &&
        <DetailsContainer>
          <img src={artwork.image} />
          <DetailsText>
            <h4>{artwork.title} {productDetails.productType === ProductType.PRINT ? ' (Print)' : ''}</h4>
            <p>{priceText()}</p>
          </DetailsText>
        </DetailsContainer>
      }
      <Border />
    </Container>
  )
}

const Container = styled(Link)`
  border-radius: 4px;
  box-shadow: 0px 3px 10px lightgrey;
  padding-bottom: 0.5rem;
  position: relative;
  transition: transform 350ms ease-in-out;
  width: 100%;

  img {
    aspect-ratio: 1 / 1;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    object-fit: cover;
    width: 100%;
  }

  h4, p {
    text-align: center;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:hover span {
    border-color: var(--theme-darkgrey);
  }
`

const DetailsContainer = styled.div`
`

const DetailsText = styled.div`
`

const Border = styled.span`
  border: 1px solid transparent;
  border-radius: 4px;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  transition: border 350ms ease-in-out;
`