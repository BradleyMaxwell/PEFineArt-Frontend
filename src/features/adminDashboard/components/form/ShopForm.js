import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useFetch from '../../../../hooks/useFetch'
import FormField from './FormField'

export const ProductType = {
    ORIGINAL: 'Original',
    PRINT: 'Print'
}

export default function ShopForm() {
  const { data: artworks } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/gallery/artwork`)

  const [artwork, setArtwork] = useState('')
  const [productType, setProductType] = useState(ProductType.ORIGINAL)
  const [hasFraming, setHasFraming] = useState(false)
  const [mediums, setMediums] = useState('')
  const [size, setSize] = useState('')
  const [unitPrices, setUnitPrices] = useState({
    Original: '',
    A5: '',
    A4: '',
    A3: '',
    A2: '',
    A1: ''
  })
  const [framingPrices, setFramingPrices] = useState({
    Original: '',
    A5: '',
    A4: '',
    A3: '',
    A2: '',
    A1: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(`${process.env.REACT_APP_BACKEND_URI}/shop`, {
        artwork,
        productType,
        hasFraming,
        mediums, 
        size,
        prices: {
            Original: { unitPrice: unitPrices.Original, framingPrice: framingPrices.Original },
            A5: { unitPrice: unitPrices.A5, framingPrice: framingPrices.A5 },
            A4: { unitPrice: unitPrices.A4, framingPrice: framingPrices.A4 },
            A3: { unitPrice: unitPrices.A3, framingPrice: framingPrices.A3 },
            A2: { unitPrice: unitPrices.A2, framingPrice: framingPrices.A2 },
            A1: { unitPrice: unitPrices.A1, framingPrice: framingPrices.A1 }
        }
      }).then((res) => {
        console.log('successfully created')
        // resetForm()
      }).catch((err) => {
        console.error(err.response)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
        {artworks && 
        <FormField label='Artwork'>
            <select onChange={e => setArtwork(e.target.value)}>
                {artworks.map(artwork =>
                    <option key={artwork._id} value={artwork._id}>{artwork.title} </option>
                )}
            </select>
        </FormField>}

        <FormField label='Type'>
            <select onChange={e => setProductType(e.target.value)}>
                <option value={ProductType.ORIGINAL}>Original</option>
                <option value={ProductType.PRINT}>Print</option>
            </select>
        </FormField>
        
        <FormField label='Mediums'>
            <textarea required name="mediums" cols="30" rows="10" value={mediums} onChange={e => setMediums(e.target.value)}></textarea>
        </FormField>

        <FormField label='Size' style={{display: productType === ProductType.ORIGINAL ? 'flex' : 'none'}}>
            <input type="text" value={size} onChange={e => setSize(e.target.value)} />
        </FormField>

        <FormField label='Price £'>
            <Original style={{display: productType === ProductType.ORIGINAL ? 'block' : 'none'}}>
                <input type="number" name='originalPrice' value={unitPrices.Original} onChange={e => setUnitPrices( { ...unitPrices, Original: e.target.value })} />
            </Original>

            <Print style={{display: productType === ProductType.PRINT ? 'block' : 'none'}}>
                <FormField label='A5'>
                    <input type="number" name='A5price' value={unitPrices.A5} onChange={e => setUnitPrices( { ...unitPrices, A5: e.target.value })} />
                </FormField>
                <FormField label='A4'>
                    <input type="number" name='A4price' value={unitPrices.A4} onChange={e => setUnitPrices( { ...unitPrices, A4: e.target.value })} />
                </FormField>
                <FormField label='A3'>
                    <input type="number" name='A3price' value={unitPrices.A3} onChange={e => setUnitPrices( { ...unitPrices, A3: e.target.value })} />
                </FormField>
                <FormField label='A2'>
                    <input type="number" name='A2price' value={unitPrices.A2} onChange={e => setUnitPrices( { ...unitPrices, A2: e.target.value })} />
                </FormField>
                <FormField label='A1'>
                    <input type="number" name='A1price' value={unitPrices.A1} onChange={e => setUnitPrices( { ...unitPrices, A1: e.target.value })} />
                </FormField>
            </Print>
        </FormField>

        <FormField label='Framing Option?'>
            <select onChange={e => setHasFraming(!hasFraming)}>
                <option value={false}>No</option>
                <option value={true}>Yes</option>
            </select>
        </FormField>

        <Framing style={{display: hasFraming ? 'block' : 'none'}}>
            <FormField label='Framing Cost £'>
                <OriginalFraming style={{display: productType === ProductType.ORIGINAL ? 'block' : 'none'}}>
                    <input type="number" name="originalFraming" value={framingPrices.Original} onChange={e => setFramingPrices( { ...framingPrices, Original: e.target.value })} />
                </OriginalFraming>

                <PrintFraming style={{display: productType === ProductType.PRINT ? 'block' : 'none'}}>
                    <FormField label='A5' style={{display: unitPrices.A5 !== '' ? 'flex' : 'none'}}>
                        <input type="number" name="A5framing" value={framingPrices.A5} onChange={e => setFramingPrices( { ...framingPrices, A5: e.target.value })} />
                    </FormField>
                    <FormField label='A4' style={{display: unitPrices.A4 !== '' ? 'flex' : 'none'}}>
                        <input type="number" name="A4framing" value={framingPrices.A4} onChange={e => setFramingPrices( { ...framingPrices, A4: e.target.value })} />
                    </FormField>
                    <FormField label='A3' style={{display: unitPrices.A3 !== '' ? 'flex' : 'none'}}>
                        <input type="number" name="A3framing" value={framingPrices.A3} onChange={e => setFramingPrices( { ...framingPrices, A3: e.target.value })} />
                    </FormField>
                    <FormField label='A2' style={{display: unitPrices.A2 !== '' ? 'flex' : 'none'}}>
                        <input type="number" name="A2framing" value={framingPrices.A2} onChange={e => setFramingPrices( { ...framingPrices, A2: e.target.value })} />
                    </FormField>
                    <FormField label='A1' style={{display: unitPrices.A1 !== '' ? 'flex' : 'none'}}>
                        <input type="number" name="A1framing" value={framingPrices.A1} onChange={e => setFramingPrices( { ...framingPrices, A1: e.target.value })} />
                    </FormField>
                </PrintFraming>
            </FormField>
        </Framing>
        <button className='submit-button' type="submit">create</button>
    </form>
  )
}

const Original = styled.div`
`

const Print = styled.div`
`

const Framing = styled.div`
    display: none;
`

const OriginalFraming = styled.div`
`

const PrintFraming = styled.div`
`