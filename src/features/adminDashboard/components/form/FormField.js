import React from 'react'
import styled from 'styled-components'

export default function FormField({ children, label, style }) {
  return (
    <Container style={style}>
        <label>{label}</label>
        {children}
    </Container>
  )
}

export const FieldType = {
    TEXT_INPUT: 'text-input',
    TEXTAREA: 'textarea',
    SELECT: 'select',
    NUMBER_INPUT: 'number-input'
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    input {
        max-width: 45ch;
    }

    textarea {
        max-width: 60ch;
        resize: none;
    }

    select {
        max-width: fit-content;
    }

    
`