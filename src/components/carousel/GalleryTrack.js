import React, { useContext } from 'react'
import styled from 'styled-components'
import { CarouselStyleContext } from './GalleryCarousel'


export default function GalleryTrack({ image, title }) {
    const carouselStyle = useContext(CarouselStyleContext)
    
    const styling = {
        borderRadius: carouselStyle.roundedBorder ? "50%" : "var(--carousel-border-radius)"
    }

    return (
    <TrackContainer className='track-component'>
        <ImageContainer className='carousel-track' style={styling}>
            <Border />
            <img src={image} alt={title} />
        </ImageContainer>
        <h4>{title}</h4>
    </TrackContainer>
    )
}

const TrackContainer = styled.div`
    backface-visibility: hidden;

    h4 {
        text-align: center;
        font-weight: 500;
        letter-spacing: 0.4px;
    }

    &:hover div {
        border-color: var(--theme-darkgrey);
    }
`
const ImageContainer = styled.div`
    aspect-ratio: 1 / 1;
    margin: var(--carousel-track-margin);
    position: relative;
    transition: opacity 350ms ease-in-out;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: inherit;
        box-shadow: 0px 3px 10px grey;
    }
`

const Border = styled.div`
    border: 2px solid transparent;
    border-radius: inherit;
    height: 100%;
    position: absolute;
    width: 100%;
    transition: border 200ms;
`

