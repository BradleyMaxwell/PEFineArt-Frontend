import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PhoebePainting from '../assets/backgrounds/phoebepainting.jpeg'
import Example from '../assets/backgrounds/gallery_background.jpeg'
import Logo from '../assets/icons/logo.svg'

export default function Biography() {
  return (
    <Container>
      <Page>
        <h2>about me</h2>

        <p>
          My name is Phoebe Edwards, and I am a contemporary artist with a BA in Fine Art from Loughborough University. 
          My present studio is based in Shropshire.
        </p>

        <p>
          I specialise in using a range of media ranging from oil painting, drawing, sculpture, and print making. 
          My subject matter consists of portraiture, equine and animal portraiture, landscapes, nature, and still life.
        </p>

        <p>
          Other areas of artistic disciplines interest me, such as, graphic design and illustration, textiles, and photography. 
          You can view my current artwork in <Link to='/gallery'>My Gallery!</Link> If I am not producing artwork, then you will find me visiting exhibitions for 
          inspiration such as, Tate Modern, Nottingham Contemporary, The Turner Prize, amongst others.
        </p>

        <p>
          I am passionate about creating beautiful, commissioned work for clients for them to display in their homes to enjoy, and I 
          take pleasure in producing art pieces for my own practice to use for displaying in galleries and/or to sell on my online shop 
          as prints or the original pieces.
        </p>

        <img src={Logo} alt="Phoebe Edwards Fine Art" />
      </Page>
    </Container>
  )
}

const Container = styled.main`
  background: url(${Example});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center top;
  padding: 2rem;
`

const Page = styled.div`
  background-color: #fffffe;
  border-radius: 4px;
  box-shadow: var(--theme-boxshadow);
  padding: 3rem;
  width: fit-content;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 1.2rem;
  }

  p {
    margin: 1.8rem 0;
    max-width: 50ch;
  }

  a {
    color: #0096FF;
  }

  img {
    margin: 0 auto;  
    max-width: 250px;
  }
`

const Background = styled.img`
  
` 