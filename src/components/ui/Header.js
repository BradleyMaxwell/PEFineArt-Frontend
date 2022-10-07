import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logoSvg from '../../assets/icons/logo.svg'
import basketSvg from '../../assets/icons/basket.svg'
import HeaderLink from './HeaderLink'
import { useBasket } from '../../features/shop/context/BasketContext'

export default function Header() {
  const { basket } = useBasket()

  return (
    <Container>
      <LinkContainer>
        <LeftLinks>
          <Link to='/'>
            <img src={logoSvg} alt="Phoebe Edwards Fine Art" />
          </Link>
          <HeaderLink to='/' label="home" />
          <HeaderLink to='/biography' label="biography" />
          <HeaderLink to='/gallery'label="gallery" />
          <HeaderLink to='/shop' label="shop" />
          <HeaderLink to='/contact' label="contact" />
        </LeftLinks>

        <RightLinks>
          <HeaderLink to='/basket' image={basketSvg} basketLength={basket.length}/>
        </RightLinks>
      </LinkContainer>
    </Container>
  )
}

const Container = styled.header`
  align-items: center;
  background-color: white;
  box-shadow: var(--theme-boxshadow);
  display: flex;
  padding-top: 5px;
  padding-bottom: 3.5px;
  position: sticky;
  top: 0;
  z-index: 10000;
  width: 100vw;
`

const LinkContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1400px;
  width: calc(100% - 40px);
`

const LinksSubContainer = styled.div`
  align-items: center;
  display: flex;
  height: max-content; 
`

const LeftLinks = styled(LinksSubContainer)`
  align-items: center;
  justify-content: center;
  display: flex;

  > * {
    &:first-child {
      margin-right: 22px;
    }

    &:not(:first-child) {
      padding: 14px;
    }
  }

  img {
    height: calc((14px * 2) + 13px);
  }
`

const RightLinks = styled(LinksSubContainer)`
  > * {
  }

  img {
    height: 25px;
    position: relative;
    top: 2.5px;
  }
`