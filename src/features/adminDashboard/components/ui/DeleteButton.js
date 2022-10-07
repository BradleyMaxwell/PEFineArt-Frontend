import React from 'react'
import Delete from '../../../../assets/icons/delete.svg'
import axios from 'axios'
import useDelete from '../../../../hooks/useDelete'

export default function DeleteButton({ url, id, className }) {

  const handleDelete = () => {
    axios.delete(url + '/' + id)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err.message)
    })
  } 

  return (
    <button className={className} onClick={handleDelete}>
        <img src={Delete} alt='Delete' />
    </button>
  )
}