import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SpotlightTrack from './components/spotlightTrack'
import Owl from './assets/images/SnowyOwl_1.jpg'
import Phoebe from './assets/images/phoebe.jpg'
import Summer from './assets/images/summerbeach.jpg'

export default function SpotlightCarousel() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
  }

  return (
    <Carousel {...settings}>
        <SpotlightTrack image={Owl}/>
        <SpotlightTrack image={Phoebe} />
        <SpotlightTrack image={Summer} description="20% off all summer pieces until 1st september!"/>
    </Carousel>
  )
}

const Carousel = styled(Slider)`
  aspect-ratio: 3 / 1;
  border: 3px solid red;
  border-radius: var(--carousel-border-radius);
  width: 50%;
`