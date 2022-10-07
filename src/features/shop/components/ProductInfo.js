import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useFetch from '../../../hooks/useFetch'
import { ProductType } from '../../adminDashboard/components/form/ShopForm'
import Black from '../assets/images/black.png'
import DarkWood from '../assets/images/darkwood.jpeg'
import Gold from '../assets/images/gold.jpeg'
import LightWood from '../assets/images/lightwood.jpeg'
import Silver from '../assets/images/silver.jpeg'
import White from '../assets/images/white.png'
import { useBasket } from '../context/BasketContext'

export default function ProductInfo({ product }) {

  const { increaseQuantity } = useBasket()

  // collecting the printPrices for if the product is a print

  const printPrices = [
    product.prices.A5,
    product.prices.A4,
    product.prices.A3,
    product.prices.A2,
    product.prices.A1
  ]

  const getAvailablePrints = () => {
    if (product.productType === ProductType.PRINT) {
      let availablePrints = []
    
      printPrices.map((print, index) =>
        print.unitPrice ? availablePrints.push(
          { 
          size: `A${5 - index}`,
          unitPrice: print.unitPrice,
          framingPrice: print.framingPrice ? print.framingPrice : null
          }
        ) 
        : null
      )
      
      return availablePrints
    }
  }

  const { data: artwork } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/gallery/artwork/${product.artwork}`)
  const [selectedPrint, setSelectedPrint] = useState(product.productType === ProductType.PRINT ? getAvailablePrints()[0] : product.prices.Original)
  const [selectedFraming, setSelectedFraming] = useState('None')
  const [quantity, setQuantity] = useState(1)

  const handleQuantity = (quantityChange) => {
    if (quantity + quantityChange <= 0) {
      console.log('cannot reduce quantity further')
    } else if (quantity + quantityChange > 20){
      console.log('reached quantity limit')
    } else {
      setQuantity(currentQuantity => currentQuantity + quantityChange)
    }
  }

  function addToBasket () {
    increaseQuantity({ id: product._id, print: selectedPrint, framing: selectedFraming, quantity })
  }

  return (
    <Container>
        {artwork &&
        <InfoContainer>
          <SubContainer>
            <div>
              <h2><i>{artwork.title} {product.productType === ProductType.PRINT ? ' (Print)' : ''}</i></h2>
              <p>{artwork.context}</p>
            </div>
  
          </SubContainer>

          <SubContainer>
            <Price>£{selectedPrint.unitPrice}</Price>
          </SubContainer>

          <SubContainer>
            <div>
              <p><strong>Mediums</strong></p>
              <p>{product.mediums}</p>
            </div>

            <div>
              <p><strong>{product.productType === ProductType.ORIGINAL ? 'Size' : 'Sizes'}</strong></p>
              {product.productType === ProductType.ORIGINAL ? <p>{product.size}</p> 
              :
              <PrintOptionsContainer>
                {getAvailablePrints().map(option =>
                  <PrintOption 
                    style={{borderColor: option.size === selectedPrint.size ? 'var(--theme-darkgrey)' : ''}} 
                    onClick={() => setSelectedPrint(option)}>
                    {option.size}
                  </PrintOption>
                )}
              </PrintOptionsContainer>
              }
            </div>

            {product.hasFraming ? 
              <div>
                <p><strong>Framing {selectedFraming !== 'None' ? `(+£${selectedPrint.framingPrice})` : ''}</strong></p>
                <FramingOptions>
                  <FramingOption onClick={() => setSelectedFraming('None')} style={{borderColor: selectedFraming === 'None' ? 'var(--theme-darkgrey)' : ''}}>
                    None
                  </FramingOption>
                  <FramingOption onClick={() => setSelectedFraming('Black')} style={{borderColor: selectedFraming === 'Black' ? 'var(--theme-darkgrey)' : ''}}>
                    <img src={Black} alt="Black" />
                    Black
                  </FramingOption>

                  <FramingOption onClick={() => setSelectedFraming('White')} style={{borderColor: selectedFraming === 'White' ? 'var(--theme-darkgrey)' : ''}}>
                    <img src={White} alt="White" />
                    White
                  </FramingOption>

                  <FramingOption onClick={() => setSelectedFraming('Silver')} style={{borderColor: selectedFraming === 'Silver' ? 'var(--theme-darkgrey)' : ''}}>
                    <img src={Silver} alt="Silver" />
                    Silver
                  </FramingOption>

                  <FramingOption onClick={() => setSelectedFraming('Gold')} style={{borderColor: selectedFraming === 'Gold' ? 'var(--theme-darkgrey)' : ''}}>
                    <img src={Gold} alt="Gold" />
                    Gold
                  </FramingOption>

                  <FramingOption onClick={() => setSelectedFraming('Light Wood')} style={{borderColor: selectedFraming === 'Light Wood' ? 'var(--theme-darkgrey)' : ''}}>
                    <img src={LightWood} alt="Light Wood" />
                    Light Wood
                  </FramingOption>

                  <FramingOption onClick={() => setSelectedFraming('Dark Wood')} style={{borderColor: selectedFraming === 'Dark Wood' ? 'var(--theme-darkgrey)' : ''}}>
                    <img src={DarkWood} alt="Dark Wood" />
                    Dark Wood
                  </FramingOption>
                </FramingOptions>
              </div>
            : ''}
          </SubContainer>

          <SubContainer>
            {product.productType === ProductType.PRINT || product.hasFraming ? <div>
              <p><strong>Subtotal: £{selectedFraming !== 'None' ? (selectedPrint.unitPrice + selectedPrint.framingPrice) * quantity : selectedPrint.unitPrice * quantity}</strong></p>
            </div>
            : null}

            <AddQuantityContainer>
              <div>
                <AddToBasket onClick={addToBasket}>
                  add to basket
                </AddToBasket>
                {product.productType === ProductType.PRINT ? 
                  <span>
                    <AddSubtract onClick={() => handleQuantity(-1)} style={{visibility: quantity > 1 ? 'visible' : 'hidden'}}>-</AddSubtract>
                    {quantity}
                    <AddSubtract onClick={() => handleQuantity(1)} style={{visibility: quantity < 20 ? 'visible' : 'hidden'}}>+</AddSubtract>
                  </span>
                : null}
              </div>
            </AddQuantityContainer>
          </SubContainer>
        </InfoContainer>
        }
    </Container>
  )
}

const Container = styled.div`
    min-height: 100%;
    padding: var(--shop-carousel-padding);  
    width: var(--product-info-width);
`

const InfoContainer = styled.div`
  overflow: auto;

  > * {
    margin-bottom: 2rem;
  }
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`

const Price = styled.h4`
    font-weight: bold;
`

const PrintOptionsContainer = styled.div`
  display: flex;
  gap: 6px;
  width: 100%;
`

const PrintOption = styled.button`
  aspect-ratio: 1 / 1.4142;
  background-color: white;
  border: 1.5px solid var(--theme-feint-darkgrey);
  font-size: 1rem; 
  letter-spacing: 0.7px;
  width: calc(100% / 5);

  &:hover {
    border-color: var(--theme-darkgrey);  
  }
`

const FramingOptions = styled.div`
  display: grid;
  gap: 6px;
  grid-template-columns: repeat(4, 1fr);
  max-width: 100%;
`

const FramingOption = styled.button`
  background-color: white;
  border: 1.5px solid transparent;
  padding: 1rem;

  img {
    aspect-ratio: 1 / 1;
    border: 1px solid var(--theme-darkgrey);
    border-radius: 100%;
    max-width: 100%;
  }
`

const AddQuantityContainer = styled.div`
`

const AddToBasket = styled.button`
  background-color: var(--theme-pink);
  border-radius: var(--carousel-border-radius);
  border-style: none;
  font-size: 1rem;
  letter-spacing: 1.42px;
  padding: 1rem;
  text-transform: uppercase;

  &:hover {
    filter: brightness(1.05);
  }
`

export const AddSubtract = styled.button`
  background-color: white;
  border: none;
  font-size: 1rem;
  padding: 1rem;
`