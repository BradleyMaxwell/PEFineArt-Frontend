import React from 'react'
import styled from 'styled-components'
import useFetch from '../../../hooks/useFetch'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PreviousArrow from '../../../assets/icons/thin_previous_arrow.svg'
import NextArrow from '../../../assets/icons/thin_next_arrow.svg'
import '../assets/shopStyles.css'

export default function ProductImageCarousel({ product }) {
  const { data: artworks } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/gallery/artwork`)

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    dots: true,
    fade: true
  }

  return (
    <Container>
      {artworks &&
        <Carousel {...settings}>
          {artworks.map(artwork =>
            <img src={artwork.image} alt={artwork.title} />
          )}
        </Carousel>
      }
    </Container>
  )
}

const Container = styled.div`
  width: calc(100% - var(--product-info-width));
  height: var(--shop-carousel-height);
`

const Carousel = styled(Slider)`
  height: 100%;
  padding: var(--shop-carousel-padding);

  .slick-arrow {
    background-color: white;
    border-radius: 1px;
    height: fit-content;
    padding: var(--shop-carousel-arrow-padding);
    width: fit-content;
    z-index: 1000;
  }

  .slick-slide {
    background-color: var(--shop-carousel-background-color);
    height: calc(var(--shop-carousel-height) - (2 * var(--shop-carousel-padding)));

    > div { // because each slick-slide puts the image inside another div
      height: 100%;
    }
  }
  
  .slick-slide img {
    height: 100%;
    object-fit: contain;
  }

  .slick-prev {
    left: calc(var(--shop-carousel-padding) + var(--shop-carousel-arrow-padding));
  }

  .slick-prev:before {
    content: url(${PreviousArrow});
  }

  .slick-next {
    right: calc(var(--shop-carousel-padding) + var(--shop-carousel-arrow-padding));
  }

  .slick-next:before {
    content: url(${NextArrow});
  }

  .slick-dots {
    bottom: 0px;
  }
`