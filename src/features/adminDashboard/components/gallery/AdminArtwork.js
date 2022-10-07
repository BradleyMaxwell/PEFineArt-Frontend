import React from 'react'
import styled from 'styled-components'
import EditButton from '../ui/EditButton'
import DeleteButton from '../ui/DeleteButton'
import PreviewImage from '../../../../assets/icons/preview-image.svg'
import ArtworkForm from '../form/ArtworkForm'

export default function AdminArtwork({ artwork, isPreviewImage }) {
  return (
    <Artwork>
      <ArtworkOptions>
        <EditButton className='delete-edit-button'>
          <ArtworkForm artwork={artwork} />
        </EditButton>
        <DeleteButton className='delete-edit-button' url={`${process.env.REACT_APP_BACKEND_URI}/gallery/artwork`} id={artwork._id} />
      </ArtworkOptions>

      <Image>
        <img src={artwork.image} alt={artwork.title} />
        <PreviewImageBorder style={{display: isPreviewImage ? 'block' : 'none'}}>
          <img src={PreviewImage} alt="Preview Image" />
        </PreviewImageBorder>
      </Image>
  
      <h4>{artwork.title}</h4>
    </Artwork>
  )
}

const Artwork = styled.div`
  > img {
    aspect-ratio: 1 / 1;
    border-radius: var(--carousel-border-radius);
    object-fit: contain;
    width: 100%;
  }

  h4 {
      margin-top: 0.5rem;
      text-align: center;
  }
`

const ArtworkOptions = styled.div`
    display: flex;
    justify-content: start;

    img {
        max-height: 15px;
    }
`

const Image = styled.div`
    aspect-ratio: 1 / 1;
    border-radius: var(--carousel-border-radius);
    position: relative;
    width: 100%;
    min-width: 100%;

    > img {
      border-radius: inherit;
      box-shadow: 0px 3px 10px grey;
      position: absolute;
      height: 100%;
      width: 100%;
    }
`

const PreviewImageBorder = styled.span`
    border: 4px solid var(--theme-pink);
    border-radius: inherit;
    position: absolute;
    height: 100%;
    width: 100%;

    img {
      left: 5px;
      position: relative;
      top: 5px;
    }
`