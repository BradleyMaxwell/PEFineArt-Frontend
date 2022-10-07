import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonColor = {
    PINK: 'var(--theme-pink)'
}

export default function ButtonLink({ children, to, color }) {
  return (
    <StyledLink to={to} style={{ backgroundColor: color }}>
      {children}
    </StyledLink> 
  )
}

export const StyledLink = styled(Link)`
  border-radius: 100px;
  border-style: none;
  box-shadow: var(--theme-boxshadow);
  display: block;
  font-size: 1.1rem;
  letter-spacing: 1.3px;
  padding: 1rem 1.5rem;
  text-transform: uppercase;
  width: fit-content;

  &:hover {
    filter: brightness(1.05)
  }
`