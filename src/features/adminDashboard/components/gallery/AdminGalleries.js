import React from 'react'
import useFetch from '../../../../hooks/useFetch'
import DeleteButton from '../ui/DeleteButton'
import EditButton from '../ui/EditButton'
import styled from 'styled-components'
import AdminArtwork from './AdminArtwork'
import GalleryEditForm from '../form/GalleryEditForm'
import { ToastContainer } from 'react-toastify'

export default function AdminGalleries() {
  const { data: galleries, error: galleryError, isPending: galleryIsPending} = useFetch(`${process.env.REACT_APP_BACKEND_URI}/gallery`)
  const { data: artworks, error: artworkError, isPending: artworkIsPending} = useFetch(`${process.env.REACT_APP_BACKEND_URI}/gallery/artwork`)

  return (
    <div>
        {galleries && galleries.map(gallery =>
            <Gallery>
                <GalleryOptions>
                    <h3>{gallery.title}</h3>
                    <EditButton className='delete-edit-button'>
                        <GalleryEditForm gallery={gallery} />
                    </EditButton>
                    <DeleteButton className='delete-edit-button' url={`${process.env.REACT_APP_BACKEND_URI}/gallery`} id={gallery._id} />
                </GalleryOptions>

                <GalleryArtworks>
                    {artworks && artworks.filter(artwork => artwork.gallery === gallery._id).map(artwork =>
                        <AdminArtwork artwork={artwork} isPreviewImage={gallery.previewImage === artwork._id} />
                    )}
                </GalleryArtworks>

                <Divider />
            </Gallery>
        )}
        <ToastContainer />
    </div>
  )
}

const Divider = styled.div`
    border: 1px solid var(--theme-feint-darkgrey);
    border-radius: 100px;
    margin-top: 1rem;
`

const Gallery = styled.div`
    margin-bottom: 1rem;
`

const GalleryOptions = styled.div`
    align-items: center;
    display: flex;
    
    h3 {
        margin-right: 20px;
    }
`

const GalleryArtworks = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: fit-content;
    gap: 2rem;

    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(5, 1fr);
    }
`