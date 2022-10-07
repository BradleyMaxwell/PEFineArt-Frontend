import React from 'react'
import axios from 'axios'

export default function useDelete({ url, id }) {

  axios.delete(url + '/' + id)
  .then(res => {
    console.log('Successfully Deleted')
  }).catch(err => {
    console.log(err.message)
  })
}
