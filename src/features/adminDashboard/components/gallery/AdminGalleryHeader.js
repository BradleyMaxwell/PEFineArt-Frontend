import React from 'react'
import styled from 'styled-components'
import Option from '../ui/Option'
import GalleryForm from '../form/GalleryForm'
import ArtworkForm from '../form/ArtworkForm'

export default function AdminGalleryHeader() {
  return (
    <Container>
        <Header>Gallery</Header>

        <OptionsContainer>
            <Option className='admin-add-button' action='add gallery'>
                <GalleryForm />
            </Option>
            <Option className='admin-add-button' action='add artwork'>
                <ArtworkForm />
            </Option>
        </OptionsContainer>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 2rem;
`

const OptionsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const Header = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
`