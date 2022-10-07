import React, { useState } from 'react'
import FormField from './FormField'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

export default function GalleryForm () {

  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(`${process.env.REACT_APP_BACKEND_URI}/gallery`, { 
      title
    }).then((res) => {
      toast.success(`Successfully created gallery '${title}'`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
        resetForm()
    }).catch((err) => {
      console.log(err)
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

  const resetForm = () => {
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
        <FormField label='Title'>
            <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
        </FormField>

        <button className='submit-button' type="submit">publish</button>
        <ToastContainer />
    </form>
  )
}