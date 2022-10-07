import React, { useState } from 'react'
import styled from 'styled-components'
import Close from '../../../../assets/icons/close.svg'

export default function Option({ children, action, className }) {
  const [open, setOpen] = useState(false)
  
  const style = {display: open ? 'block' : 'none'}

  return (
    <Container>
      <button className={className} onClick={() => setOpen(true)}>{action}</button>
    
      <PopoutContainer action={action} style={style} onClick={() => setOpen(false)}>
            <Popout onClick={e => e.stopPropagation()}>
              <CloseButton onClick={() => {setOpen(false)}}>
                <img src={Close} alt="Close" />
              </CloseButton>
              {children}
            </Popout>
      </PopoutContainer>
    </Container>
  )
}

const Container = styled.div`
`

const PopoutContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    border-style: none;
    bottom: 0;
    height: 100vh;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 40000;
`

const CloseButton = styled.button`
  background-color: transparent;
  border-style: none;
  padding: 1.5rem;
  position: absolute;
  top: 0;
  right: 0;
`

const Popout = styled.div`
  background-color: white;
  border-radius: 14px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  width: 80vw;
  height: 80vh;
  opacity: 1;
  overflow: scroll;
  padding: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`

