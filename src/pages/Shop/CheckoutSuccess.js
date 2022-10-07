import React, { useEffect, useState } from 'react'
import { useBasket } from '../../features/shop/context/BasketContext'
import styled from 'styled-components'
import Logo from '../../assets/icons/logo.svg'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'
import DotLoader from 'react-spinners/DotLoader'
import PurchaseComplete from '../../features/shop/assets/images/purchase-complete.svg'
import CheckoutSummary from '../../features/shop/components/CheckoutSummary'
import ButtonLink, { ButtonColor } from '../../components/ui/ButtonLink'

export default function CheckoutSuccess() {
  const { emptyBasket } = useBasket()
  const [searchParams] = useSearchParams()
  const sessionID = searchParams.get('session_id')

  const [data, setData] = useState(null)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => { // empty basket and collect receipt
    emptyBasket()
    setPending(true)
    axios.get(`${process.env.REACT_APP_BACKEND_URI}/shop/checkout-success`, { params: { session_id: sessionID }})
    .then(res => {
      console.log(res.data)
      setData(res.data)})
    .catch(err => 
      setError(err))
    .finally(() => 
      setPending(false))
  }, [])

  if (pending) return (
    <main>
      <Loading>
        <DotLoader color='var(--theme-darkgrey)' speedMultiplier={1.3} size={40} />
        <h3>Collecting Receipt...</h3>
      </Loading>
    </main>
  )


  if (data) return (
    <Container>
      <SessionContainer>
        <FirstContainer>
          <ThankYouCard>
            <PurchaseCompleteContainer>
              <h3>Thank you, {data.customer.name}</h3>
              <img src={PurchaseComplete} />
            </PurchaseCompleteContainer>

            <p>Your order has been successfully placed. You will be receiving a confirmation email shortly at <u>{data.session.customer_details.email}</u> if you have not already.</p>

            <p>Regards,</p>
            <PhoebeLogo src={Logo} alt="Phoebe Edwards Fine Art" />
          </ThankYouCard>

          <Help>If you have any issues with your order, get in contact at <u>phoebeedwardsfineart@outlook.com</u></Help>
        </FirstContainer>

        <CheckoutSummary session={data.session} />
      </SessionContainer>

      <ButtonLink to={'/'} color={ButtonColor.PINK}>Back Home</ButtonLink>
    </Container>
  )
}

const Container = styled.main`
  a {
    margin: 0 auto 3rem auto;
  }
`

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 3rem;
`

const PurchaseCompleteContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  h3 {
    font-weight: 500;
  }
`
const SessionContainer = styled.div`
  display: flex;
  justify-content: center;

  > * {
    margin: 3rem; 
  }
`

const FirstContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const ThankYouCard = styled.div`
  box-shadow: var(--theme-boxshadow);
  padding: 2rem;
  height: fit-content;
  width: fit-content;

  p {
    margin-top: 1.5rem;
    max-width: 45ch;
  }
`

const PhoebeLogo = styled.img`
  margin: 0 auto;
  margin-top: 10px;
  max-width: 225px;
`

const Help = styled.p`
  font-size: 0.8rem;
  margin: 2rem;
  max-width: 45ch;
  text-align: center;
`