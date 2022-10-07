import React from 'react'
import styled from 'styled-components'
import Option from './Option'

export default function AdminHeader({ header }) {
  return (
    <Container>
        <h2>{header}</h2>
        <Options>
        </Options>
    </Container>
  )
}

const Container = styled.div`
`

const Options = styled.div`
  display: flex;
  gap: 1rem;
`