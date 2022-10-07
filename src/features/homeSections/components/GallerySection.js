import React from 'react'
import styled from 'styled-components'
import GalleryCarousel from '../../../components/carousel/GalleryCarousel'
import GalleryTrack from '../../../components/carousel/GalleryTrack'
import Equine from '../assets/images/equine.jpeg'
import Landscapes from '../assets/images/landscapes.jpeg'
import PetPortraits from '../assets/images/petportrait.jpeg'
import Portraits from '../assets/images/celebrity.jpeg'
import Digital from '../assets/images/digital.jpeg'
import ButtonLink, { ButtonColor, StyledLink } from '../../../components/ui/ButtonLink'
import useFetch from '../../../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function GallerySection() {
  const { data: galleries } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/gallery`)
  const { data: artworks } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/gallery/artwork`)

  return (
    <section>
      <StyledText>I specialise in oil paintings, drawing, digital mediums, photography, and printing. Take a look at some of my recent works in My Gallery.</StyledText>
      
      <GalleryCarousel className="max-width-container" roundedBorder={true} hiddenOverflow={true}>
        {galleries && galleries.filter(gallery => gallery.previewImage).map(gallery =>
          <Link to={`gallery/${gallery._id}`}>
            <GalleryTrack 
              image={artworks && artworks.find(artwork => artwork._id === gallery.previewImage).image}
              title={gallery.title}
            />
          </Link>
        )}
      </GalleryCarousel>

      <LinkContainer className='center-content-x'>
        <ButtonLink to='/gallery' color={ButtonColor.PINK}>visit my gallery</ButtonLink>
      </LinkContainer>
    </section>
  )
}

const StyledText = styled.h4`
  max-width: 60ch;
  margin: 50px auto;
  text-align: center;
  text-transform: none;
`

const LinkContainer = styled.div`
  margin-top: 50px;
`