import React from 'react'
import { useBasket } from '../../features/shop/context/BasketContext'
import BasketItem from '../../features/shop/components/BasketItem'
import styled from 'styled-components'
import ButtonLink, { ButtonColor } from '../../components/ui/ButtonLink'
import CheckoutSection from '../../features/shop/components/CheckoutSection'
import { Header } from './Shop'

export default function Basket() {
  const { basket, getTotal } = useBasket()

  return (
    <main>
        <Header>Your Basket</Header>
        {basket.length > 0 ?         
        <Container className='max-width-container center-content-x'>
            <BasketContainer>
                {basket.map(item =>
                <BasketItem item={item} />
                )}  
            </BasketContainer>
            <CheckoutSection />
        </Container>
        :
        <EmptyBasket>
            <h4>Looks like your basket is empty.</h4>
            <ButtonLink to='/shop' color={ButtonColor.PINK}>Start Shopping</ButtonLink>
        </EmptyBasket>
        }
    </main>
  )
}

const Container = styled.div`
    display: flex;
    gap: 2.5rem;
`
const BasketContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    margin-bottom: 3rem;
`

const EmptyBasket = styled.div`
    align-items: center; 
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 0 auto;
    width: fit-content;
`