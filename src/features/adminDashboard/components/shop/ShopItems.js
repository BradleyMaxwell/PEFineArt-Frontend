import React from 'react'
import useFetch from '../../../../hooks/useFetch'
import EditButton from '../ui/EditButton'
import ShopForm from '../form/ShopForm'
import styled from 'styled-components'
import DeleteButton from '../ui/DeleteButton'

export default function ShopItems() {
  const { data: products } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/shop`)
  const { data: artworks } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/gallery/artwork`)
  
  return (
    <Container>
        {products && products.map(product =>
            <Product>
                {artworks && 
                    <div>
                        <div style={{display: 'flex'}}>
                            <EditButton className='delete-edit-button'>
                                <ShopForm product={product} />
                            </EditButton>
                            <DeleteButton className='delete-edit-button' url={`${process.env.REACT_APP_BACKEND_URI}/shop`} id={product._id} />
                        </div>
                        <h4>{artworks.find(artwork => artwork._id === product.artwork).title + ' (' + product.productType + ')'} </h4>
                        <Artwork src={artworks.find(artwork => artwork._id === product.artwork).image} />
                    </div>
                }
            </Product>
        )}
    </Container>
  )
}

const Container = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(5, 1fr);
`

const Product = styled.div`
    h4 {
        text-align: center;
    }
`

const Artwork = styled.img`
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: 100%;
`