import React from 'react'
import styled from 'styled-components'
import { StyledLink } from '../../../components/ui/ButtonLink'

export default function CollectorsCircleSection() {
  return (
    <Container>
      <Header>join my collector's circle!</Header>
      <Subtext>for studio news and special offers.</Subtext>
      <StyledInput type="email" placeholder='Enter Email...' required={true} />
      <StyledButton>join</StyledButton>
    </Container>
  )
}

const Container = styled.section`
  border: 2px solid var(--theme-pink);
  border-radius: 20px;
  box-shadow: var(--theme-boxshadow);
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
  padding: 2rem;
  text-align: center;
  width: fit-content;
`

const Header = styled.h2`
  text-transform: uppercase;
`

const Subtext = styled.p`
  margin: 30px 0;
`

const StyledInput = styled.input`
  border-radius: 0px;
  box-shadow: none;
  font-size: 0.9rem;
  letter-spacing: 0.7px;
  text-transform: lowercase;
  width: 45ch;

  ::placeholder {
    text-transform: capitalize;
  }
`

const StyledButton = styled.button`
  background-color: var(--theme-pink);
  border-radius: 100px;
  border-style: none;
  box-shadow: var(--theme-boxshadow);
  color: white;
  display: block;
  font-size: 1.2rem;
  letter-spacing: 1.3px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1.5rem 2rem;
  text-transform: uppercase;
  width: fit-content;

  &:hover {
    filter: brightness(1.05)
  }
`