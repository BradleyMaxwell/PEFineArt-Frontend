import React, { useState, useEffect } from 'react'
import axios from 'axios'

function useFetch (url) { // this is a custom hook to get json data from the api of a given url
  const [data, setData] = useState(null)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setPending(true) // request has been sent and is now pending a response

    axios.get(url)
    .then((res) => {
        setData(res.data) // will return the data at the given url if found
    })
    .catch((err) => {
        setError(err) // will give an error if there is a problem
    })
    .finally(() => {
        setPending(false) // whatever the result may be, the request is no longer pending
    })
  }, [url, data])

  return { data, pending, error }
}

export default useFetch