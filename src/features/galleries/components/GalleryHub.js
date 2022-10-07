import React, { useEffect } from 'react'
import styled from 'styled-components'
import useFetch from '../../../hooks/useFetch'
import GalleryLink from './GalleryLink'

export default function GalleryHub() {
  const { data: galleries } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/api/gallery`)
  const { data: artworks } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/api/gallery/artwork`)

  return (
    <Container className='max-width-container'>
        {galleries && galleries.filter(gallery => gallery.previewImage).map(gallery =>
                <GalleryLink 
                    previewImage={artworks && artworks.find(artwork => artwork._id === gallery.previewImage).image} 
                    title={gallery.title} 
                    href={gallery._id}
                />
            )}
    </Container>
  )
}

const Container = styled.div`
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
`

const GalleryContainer = styled.div`
    border: 3px solid red;

    h3 {
        text-align: center;
    }

    img {
        aspect-ratio: 1 / 1;
        border-radius: 100%;
        object-fit: cover;
        width: 100%;
    }
`

const GalleryLabel = styled.h3`
`