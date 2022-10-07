import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function HeaderLink({ to, label, image, basketLength }) {
  return (
    <StyledLink to={to}>
        {image ? <img src={image} alt={label} /> : label}
        {basketLength && basketLength > 0 ? <BasketLength>{basketLength < 10 ? basketLength : '9+'}</BasketLength> : null}
        <Border />
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 1.42px;
  text-transform: uppercase;
  position: relative;

  &:hover div {
    opacity: 1;
  }
`

const Border = styled.div`
  background-color: var(--theme-darkgrey);
  border-radius: 50px;
  height: 1.5px;
  opacity: 0;
  position: relative;
  top: 5px;
  transition: opacity 200ms;
  width: 100%;
`

const BasketLength = styled.span`
  aspect-ratio: 1 / 1;
  background: var(--theme-pink);
  border-radius: 100%;
  // box-shadow: var(--theme-boxshadow);
  min-width: fit-content;
  min-height: fit-content;
  padding: 2px;
  position: absolute;
  top: -5px;
  right: -5px;
  width: 1.4rem;
  height: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
