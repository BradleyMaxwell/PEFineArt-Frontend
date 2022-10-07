import React, { useState } from 'react'
import Edit from '../../../../assets/icons/edit.svg'
import GalleryForm from '../form/GalleryForm'
import ArtworkForm from '../form/ArtworkForm'
import Option from './Option'

export const FormType = {
    GALLERY: <GalleryForm />,
    ARTWORK: <ArtworkForm />
}

export default function EditButton({ children, url, className }) {

  return (
    <Option className={className} action={<img src={Edit} />}>
      {children}
    </Option>
  )
}
