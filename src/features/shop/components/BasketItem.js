import React from 'react'
import styled from 'styled-components'
import useFetch from '../../../hooks/useFetch'
import { ProductType } from '../../adminDashboard/components/form/ShopForm'
import BasketItemDetails from './BasketItemDetails'
import { AddSubtract } from './ProductInfo'

export default function BasketItem({ item }) {
  const { data: product } = useFetch(`${process.env.REACT_APP_BACKEND_URI}/shop/${item.id}`)

  return (
    <div>
        {product && <BasketItemDetails product={product} item={item} />}
    </div>
  )
}