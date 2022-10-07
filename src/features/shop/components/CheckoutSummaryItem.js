import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function CheckoutSummaryItem({ name, quantity, unitPrice, description }) {
  return (
    <Container>
        <Info>
            <div>
                <h4 style={{fontWeight: 500}}>{name}</h4>
                <p>{description}</p>
            </div>
            <div>
                <p>Unit Price: £{unitPrice / 100}</p>
                <p>Quantity: {quantity}</p>
            </div>
        </Info>
        <Total>£{(unitPrice / 100) * quantity}</Total>
    </Container>
  )
}

const Container = styled.div`
    border-bottom: 0.5px solid lightgrey;
    padding-top: 1rem;
`

const Info = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
`

const Total = styled.h4`
    font-weight: 500;
    margin: 1rem;   
    text-align: center;
`