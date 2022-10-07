import React from 'react'
import styled from 'styled-components';
import GalleryHub from '../../features/galleries/components/GalleryHub';
import useFetch from '../../hooks/useFetch';

export default function Gallery() {

  const { data: galleries , error } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/gallery`)
  const { data: artworks } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/gallery/artwork`)

  return (
    <main>
      <Header>Gallery Hub</Header>
      <GalleryHub />
    </main>
  )
}

const Header = styled.h1`
  margin: 50px;
  text-align: center;
`