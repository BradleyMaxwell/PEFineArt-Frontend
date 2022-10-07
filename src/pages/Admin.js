import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <main>
        <Header>Admin Dashboard</Header>

        <Links>
          <StyledLink to='/admin/galleries'>Galleries</StyledLink>
          <StyledLink to='/admin/products'>Products</StyledLink>
        </Links>
    </main>
  )
}

const Header = styled.h2`
    text-align: center;
    margin: 50px 0 20px 0;
`

const Links = styled.div`
  margin: 1rem auto;
  width: fit-content;
`

const StyledLink = styled(Link)`
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: var(--theme-boxshadow);
  display: inline-block;
  font-color: var(--theme-darkgrey);
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  margin: 2rem;
  padding: 1.5rem 2rem;
  transition: border 350ms ease-in-out, transform 350ms ease-in-out;

  &:hover {
    border-color: var(--theme-darkgrey);
    transform: scale(1.05);
  }
`
