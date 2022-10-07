import React from 'react'
import { useParams } from 'react-router-dom'
import GalleryCarousel from '../../components/carousel/GalleryCarousel'
import GalleryTrack from '../../components/carousel/GalleryTrack'
import useFetch from '../../hooks/useFetch'
import styled from 'styled-components'

export default function GalleryShow() {
  const { id } = useParams()
  
  const { data: gallery } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/gallery/${id}`)
  const { data: artworks } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/gallery/artwork`)

  return (
    <Container className='center-content-x center-content-y'>
        <div>
            <h2>{gallery && gallery.title}</h2>
            <GalleryCarousel className="max-width-container" roundedBorder={false} hiddenOverflow={false}>
                {artworks && gallery && artworks.filter(artwork => artwork.gallery === gallery._id).map(artwork =>
                    <GalleryTrack image={artwork.image} title={artwork.title}/>
                )}
            </GalleryCarousel>
        </div>
    </Container>
  )
}

const Container = styled.main`
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;

    h2 {
        text-align: center;
        margin-bottom: 30px;
    }
`