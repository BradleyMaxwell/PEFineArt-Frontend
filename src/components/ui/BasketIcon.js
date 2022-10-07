import React from 'react'
import styled from 'styled-components'
import HeaderLink from './HeaderLink'
import basketSvg from '../../assets/icons/basket.svg'

export default function BasketIcon({ basketLength }) {
  return (
    <HeaderLink to='/basket' image={basketSvg}>
        {basketLength > 0 ?  
        <BasketLength>
            {basketLength < 9 ? basketLength : '9+'}
        </BasketLength>
        : null}
    </HeaderLink>
  )
}

const BasketLength = styled.span`
    border: 3px solid red;
`