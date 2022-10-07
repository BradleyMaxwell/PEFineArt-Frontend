import React from 'react'
import FormField from './FormField'
import { useState } from 'react'
import AsyncSelect from 'react-select/async'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function GalleryEditForm({ gallery }) {
  const [title, setTitle] = useState(gallery.title)
  const [previewImage, setPreviewImage] = useState(gallery.previewImage)
 
  const getArtworks = (inputValue, callback) => {
    axios.get(`${process.env.REACT_APP_BACKEND_URI}/gallery/artwork`)
    .then(res => {
      callback(res.data.filter(artwork => artwork.gallery === gallery._id).map(artwork => {
        return { label: artwork.title, value: artwork._id }
      }))
    }).catch(err => {
      console.log(err)
    })
  }

  const handlePreviewImageChange = selectedOption => {
    setPreviewImage(selectedOption.value)
  }

  const handleUpdate = e => {
    e.preventDefault()

    axios.patch(`${process.env.REACT_APP_BACKEND_URI}/gallery/${gallery._id}`, {
      title,
      previewImage
    }).then(res => {
      toast.success(`Successfully updated gallery: '${title}'`)
    }).catch(err => console.log(err))
  }

  return (
    <form onSubmit={handleUpdate}>
        <FormField label='Title'>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </FormField>

        <FormField label='Preview Image'>
            <AsyncSelect
                cacheOptions
                defaultOptions
                loadOptions={getArtworks}
                onChange={handlePreviewImageChange}
            />
        </FormField>

        <button className='submit-button' type='submit'>update</button>
    </form>
  )
}
