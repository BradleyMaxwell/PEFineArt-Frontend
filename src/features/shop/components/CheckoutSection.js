import React, { useState } from 'react'
import styled from 'styled-components'
import { useBasket } from '../context/BasketContext'
import PoweredByStripeLogo from '../assets/images/poweredbystripe-blue.svg'
import axios from 'axios'
import DotSpinner from 'react-spinners/DotLoader'
import DropdownCollapsed from '../../../assets/icons/dropdown-collapsed.svg'
import DropdownExpanded from '../../../assets/icons/dropdown-expanded.svg'

export default function CheckoutSection() {
  const { basket, getTotal } = useBasket()
  const [loadingCheckout, setLoadingCheckout] = useState(false)
  const [error, setError] = useState('')
  const [learnMoreOpen, setLearnMoreOpen] = useState(false)

  const handleCheckout = () => {
    setLoadingCheckout(true)
    axios.post(`${process.env.REACT_APP_BACKEND_URI}/shop/checkout`, { basket })
    .then(res => {
        window.location = res.data.url
    })
    .catch(err => setError(err.message))
    .finally(() => { setLoadingCheckout(false) })
  }
  return (
    <Container>
        <h3>Total: £{getTotal()}</h3>
        <CheckoutButtons>
            <Checkout onClick={handleCheckout}>Checkout</Checkout>
        </CheckoutButtons>
        <LoadingCheckout style={{visibility: loadingCheckout ? 'visible' : 'hidden'}}>
            <StyledDotSpinner size={'1.8rem'} speedMultiplier={1.5} color={'var(--theme-darkgrey)'} />
            {error ? <p style={{color: 'red'}}>{error}</p> : null}
        </LoadingCheckout>
        <StripeLink href="http://www.stripe.com" target="_blank" rel="noopener noreferrer">
            <img src={PoweredByStripeLogo} alt="Powered By Stripe" />
        </StripeLink>
        <LearnMore>
            <button onClick={() => setLearnMoreOpen(!learnMoreOpen)}><p style={{display: 'inline'}}>Checkout Process</p> {learnMoreOpen ? <img src={DropdownExpanded} alt="Hide" /> : <img src={DropdownCollapsed} alt="Show" />}</button>
            <LearnMoreContent style={{display: learnMoreOpen ? 'block' : 'none'}}>
                <ol>
                    <li>
                        <p>
                        The 'Checkout' button will take you to the payment page where you provide your email, shipping & billing address, and card details.
                        We use <StripeCheckoutLink href="https://stripe.com/gb/payments/checkout" target="_blank" rel="noopener noreferrer">Stripe Checkout</StripeCheckoutLink> so 
                        that you can be assured that your transactions are safe, swift and secure.
                        </p>
                    </li>
                    <li>
                        <p>
                            Upon successful payment, you will receive a confirmation email about your purchase and I will be notified of a new order. I will then begin gathering all the items of your order.
                        </p>
                    </li>
                    <li>
                        <p>
                            Once I have collected all the items of your order, I will post it to the shipping address provided and then an email will be sent 
                            to you saying that your order is on the way. If you have any problems or questions about your order you can contact <u>phoebeedwardsfineart@outlook.com</u>.
                        </p>
                    </li>
                </ol>
                <p style={{fontSize: '0.7rem', padding: '1rem'}}><strong>DISCLAIMER:</strong> Due to being an individual, it can be hard to predict exact delivery times despite my aim to complete orders
                    as soon as possible. Please understand that larger orders will likely take slightly longer to deliver. Thank you.
                </p>
            </LearnMoreContent>
        </LearnMore>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30ch;

    h3 {
        margin: 0 auto;
        margin-bottom: 1rem;
    }
`

const CheckoutButtons = styled.div`
    align-items: center;
    display: flex;
    position: relative; 
`

const Checkout = styled.button`
    background-color: var(--theme-pink);
    border: none;
    border-radius: 3px;
    box-shadow: var(--theme-boxshadow);
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1.42px;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
    width: 100%;

    &:hover {
        filter: brightness(1.05);
    }
`

const LoadingCheckout = styled.div`
    align-items: center;
    display: flex;
    margin: 1rem auto;
`

const StyledDotSpinner = styled(DotSpinner)`
`

const StripeLink = styled.a`
    margin: 0 auto;
    width: 45%;
    opacity: 0.7;
`

const LearnMore = styled.div`
    font-size: 0.9rem;
    margin: 1rem 0;

    button {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid transparent;
    }

    img {
        height: 0.6rem;
        width: 0.6rem;
    }

    button:hover {
        border-color: var(--theme-darkgrey);
    }

    ol {
        font-size: 0.7rem;
    }

    li {
        margin: 1rem;
        color: var(--theme-darkgrey);
    }
`

const StripeCheckoutLink = styled.a`
    color: blue;
`

const LearnMoreContent = styled.div`
    border: 0.5px solid var(--theme-darkgrey);
    border-radius: 2px;
    margin-top: 0.5rem;
    padding: 0 10px;
`