import React from 'react'
import useFetch from '../../../hooks/useFetch'
import styled from 'styled-components'
import { ProductType } from '../../adminDashboard/components/form/ShopForm'
import { AddSubtract } from './ProductInfo'
import { useBasket } from '../context/BasketContext'
import Delete from '../../../assets/icons/close.svg'

export default function BasketItemDetails({ product, item }) {
  const { increaseQuantity, decreaseQuantity, removeFromBasket } = useBasket()
  const { data: artwork } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/gallery/artwork/${product.artwork}`)
  return (
    <div>
        <Container>
            {artwork &&
            <SubContainer>
                <Image src={artwork.image} alt={artwork.title} />
                <DetailsContainer>
                    <h4>{artwork.title} {product.productType === ProductType.PRINT ? '(Print)' : ''}</h4>
                    <ProductDetails>
                        <p>Size: {product.productType === ProductType.PRINT ? item.print.size : product.size}</p>
                        {product.hasFraming ? <p>Framing: {item.framing}</p> : ''}
                    </ProductDetails>
                    <QuantityContainer>
                        <p><strong>£{item.framing === 'None' ? item.print.unitPrice * item.quantity : (item.print.unitPrice + item.print.framingPrice) * item.quantity}</strong></p>
                        <Quantity>
                            <AddSubtract onClick={() => decreaseQuantity({ ...item })}>-</AddSubtract>
                            {item.quantity}
                            {product.productType !== ProductType.ORIGINAL ? <AddSubtract onClick={() => increaseQuantity({...item, quantity: 1})}>+</AddSubtract> : null    }
                        </Quantity>
                    </QuantityContainer>
                </DetailsContainer>
                <DeleteButton onClick={() => removeFromBasket({ ...item })}><img src={Delete} alt="Delete" /></DeleteButton>
            </SubContainer>
            }
        </Container>
    </div>
  )
}

const Container = styled.div`
    border-radius: 3px;
    box-shadow: var(--theme-boxshadow);
`

const SubContainer = styled.div` 
    display: flex;
    gap: 1rem;
    height: 33vh;
    min-width: max-content;
    position: relative;
    width: 60ch;
`

const DetailsContainer = styled.div`
    padding: 1rem;
    position: relative;
    min-height: max-content;
`
const ProductDetails = styled.div`
    margin: 8px 0;
`

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    bottom: 0;
    position: absolute;
`
const Quantity = styled.div`
    display: flex;
    align-items: center;
`

const Image = styled.img`
    aspect-ratio: 1 / 1;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    height: 100%;
    object-fit: cover;
`

const DeleteButton = styled.button`
    background-color: transparent;
    border: none;
    margin: 0.8rem;
    position: absolute;
    right: 0;

    img {
        height: 16px;
    }
`