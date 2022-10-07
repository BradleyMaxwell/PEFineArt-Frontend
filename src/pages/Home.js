import React from 'react'
import IntroSection from '../features/homeSections/components/IntroSection'
import GallerySection from '../features/homeSections/components/GallerySection'
import CollectorsCircleSection from '../features/homeSections/components/CollectorsCircleSection'
import ShopContactSection from '../features/homeSections/components/ShopContactSection'
import styled from 'styled-components'

export default function Home() {
  return (
    <main>
      <IntroSection />
      <Banner><h2>one-of-a-kind oil paintings that make your space extra special.</h2></Banner>
      <GallerySection />
      <CollectorsCircleSection />
      <ShopContactSection />
    </main>
  )
}

const Banner = styled.div`
  background-color: var(--theme-lightpink);
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-style: italic;
`