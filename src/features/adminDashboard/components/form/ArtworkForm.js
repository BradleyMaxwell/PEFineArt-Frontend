import React, { useEffect, useState } from 'react'
import FormField from './FormField'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import AsyncSelect from 'react-select/async'

import { FilePond, registerPlugin } from 'react-filepond'

import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileEncode)

export default function ArtworkForm ({ artwork }) {
  
  const [title, setTitle] = useState(artwork ? artwork.title : '')
  const [context, setContext] = useState(artwork ? artwork.context : '')
  const [gallery, setGallery] = useState(artwork ? artwork.gallery : null)
  const [image, setImage] = useState([])
  const [show, setShow] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(`${process.env.REACT_APP_BACKEND_URI}/gallery/artwork`, {
      title,
      context,
      gallery,
      image: image[0].getFileEncodeDataURL(),
      show
    }).then(res => {
      toast.success(`Successfully created artwork '${title}'`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
        resetForm()
    }).catch(err => {
      toast.error(`Error: ${err.response.data.errorMessage}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    })
  }

  const handleUpdate = e => {
    e.preventDefault()

    axios.patch(`${process.env.REACT_APP_BACKEND_URI}/gallery/artwork/${artwork._id}`, {
      title,
      context,
      gallery,
      show
    }).then(res => {
      toast.success(`Successfully updated artwork '${title}'`)
    }).catch(err => {
      toast.error(`Error: ${err}`)
    })
  }

  const resetForm = () => {
    setTitle('')
    setContext('')
    setImage([])
    setShow(true)
  }

  const loadGalleries = (inputValue, callback) => {
    axios.get(`${process.env.REACT_APP_BACKEND_URI}/gallery`)
    .then(res => {
      callback(res.data.map(gallery => {
        return { label: gallery.title, value: gallery._id }
      }))
    })
  }

  const handleGalleryChange = selectedOption => {
    setGallery(selectedOption.value)
  }

  return (
    <form onSubmit={artwork ? handleUpdate : handleSubmit}>
      <FormField label='Title'>
          <input type="text" name="title" onChange={e => {setTitle(e.target.value)}} value={title} />
      </FormField>

      <FormField label='Context of Work'>
          <textarea rows='10' name='context' onChange={e => {setContext(e.target.value)}} value={context}></textarea>
      </FormField>

      <FormField label='Gallery'>
        <AsyncSelect
          defaultOptions
          loadOptions={loadGalleries}
          onChange={handleGalleryChange}
         />
      </FormField>

      <FormField label='Show In Gallery?'>
          <select name="show" onChange={e => {setShow(e.target.value)}} value={show}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
          </select>
      </FormField>

      <FilePond 
        files={image}
        onupdatefiles={setImage}
        allowFileEncode={true}
        acceptedFileTypes={['image/jpeg', 'image/png']}
        required={artwork ? false : true}
      />

      <button className='submit-button' onClick={loadGalleries}>{artwork ? 'update' : 'create'}</button>
    </form>
  )
}
