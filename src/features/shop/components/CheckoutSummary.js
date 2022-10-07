import React, { useEffect } from 'react'
import styled from 'styled-components'
import CheckoutSummaryItem from './CheckoutSummaryItem'

export default function CheckoutSummary({ session }) {
  useEffect(() => { 
    console.log('session')
    console.log(session)
})
  return (
    <Container>
        <h3>Order Summary</h3>
        {session.line_items.data.map((item, index) =>
            <CheckoutSummaryItem 
                name={session.metadata[index]} 
                quantity={item.quantity} 
                unitPrice={item.price.unit_amount} 
                description={item.description} 
            />
        )}
        <Total>Total: £{session.amount_total / 100}</Total>
        <p style={{textAlign: 'center'}}>Posting to {session.customer_details.address.line1}, {session.customer_details.address.postal_code}</p>
    </Container>
  )
}

const Container = styled.div`
    height: fit-content;

    h3 {
        font-weight: 500;
        margin-bottom: 1rem;
        text-align: center;
    }
`

const Total = styled.h4`
    font-weight: 600;
    margin: 1rem;
    text-align: center;
`