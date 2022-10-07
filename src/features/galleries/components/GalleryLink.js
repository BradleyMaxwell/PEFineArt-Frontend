import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function GalleryLink({ previewImage, href, title }) {
  return (
    <StyledLink to={href}>
        <img src={previewImage} alt={title} />
        <h3>{title}</h3>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
    transition: transform 350ms ease-in-out;

    img {
        aspect-ratio: 1 / 1;
        border-radius: 100%;
        box-shadow: 0px 3px 10px grey;
        object-fit: cover;
        width: 100%;
    }

    h3 {
        text-align: center;
    }

    &:hover {
        transform: scale(1.05);
    }
`

const Container = styled.div`

`