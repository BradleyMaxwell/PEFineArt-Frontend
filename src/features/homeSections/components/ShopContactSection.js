import React from 'react'
import styled from 'styled-components'
import ButtonLink, { ButtonColor } from '../../../components/ui/ButtonLink'

export default function ShopContactSection() {
  return (
    <Container>
      <ContentContainer>
        <Shop>
          <h2>see something you like?</h2>

          <ul>
            <li>Original handmade works.</li>
            <li>Prints available for A5 to A1.</li>
            <li>Optional bespoke framing.</li>
          </ul>

          <div className="center-content-x">
            <ButtonLink to='/shop' color={ButtonColor.PINK}>shop</ButtonLink>
          </div>
        </Shop>
        <Contact>
          <h2>get in touch.</h2>

          <ul>
            <li>Commission work.</li>
            <li>General enquiries.</li>
            <li>Any related questions.</li>
          </ul>

          <div className="center-content-x">
            <ButtonLink to='/contact' color={ButtonColor.PINK}>contact</ButtonLink>
          </div>
        </Contact>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.section`
  background-color: var(--theme-lightpink);
  padding: 50px;
`

const ContentContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: fit-content;
`


const Content = styled.div`
  background-color: white;
  border: 3px solid var(--theme-pink);
  border-radius: 50px;
  box-shadow: var(--theme-boxshadow);
  min-width: fit-content;
  padding: 3rem;
  width: 30vw;
  h2 {
    text-align: center;
  }

  ul {
    color: var(--theme-darkgrey);
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    list-style: inside;
    margin: 40px auto;
    width: fit-content;
  }

  li {
    margin: 20px;
  }
`

const Shop = styled(Content)`
  margin-right: 50px;
`

const Contact = styled(Content)`
`