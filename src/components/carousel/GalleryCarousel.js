import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PreviousArrow from '../../assets/icons/previous_arrow.svg'
import NextArrow from '../../assets/icons/next_arrow.svg'

export const CarouselStyleContext = React.createContext()

export default function GalleryCarousel({ children, roundedBorder, hiddenOverflow }) {
  const settings = {
    infinite: false,
    speed: 350,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <CarouselStyleContext.Provider value={{ roundedBorder }}>
      <Carousel {...settings} className={hiddenOverflow ? 'carousel-hidden-overflow' : 'carousel-overflow'}>
        {children}
      </Carousel>
    </CarouselStyleContext.Provider>
  )
}

const Carousel = styled(Slider)`
  width: var(--carousel-width);
  margin: 0 auto;

  button {
    width: var(--carousel-button-width);
    height: 100%;
    z-index: 9999;
  }

  .slick-arrow:before {
    opacity: 1;
  }

  .slick-prev {
    left: calc(var(--carousel-track-margin) - var(--carousel-button-width));
  }

  .slick-prev:before {
    content: url(${PreviousArrow});
  }

  .slick-next {
    right: calc(var(--carousel-track-margin) - var(--carousel-button-width));
  }

  .slick-next:before {
    content: url(${NextArrow});
  }

  .carousel-track {
    opacity: 0.3;
  }
  
  .slick-active .carousel-track {
    opacity: 1 !important;
  }
  
  .slick-disabled {
    visibility: hidden;
  }
`