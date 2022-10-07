import React from 'react'
import styled from 'styled-components'

export default function SpotlightTrack({ image, description }) {
  return (
    <Container>
        <img src={image} />
        {description ? <Description>{description}</Description> : null}
    </Container>
  )
}

const Container = styled.div`
    display: block;
    position: relative;

    img {
      border-radius: inherit;
      opacity: 0.8;
      width: inherit;
    }
`

const Description = styled.h4`
    background-color: rgba(255, 255, 255, 0.8);
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    font-weight: 500;
`