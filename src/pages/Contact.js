import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('Commission Work')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    
    e.preventDefault()
    const submitToast = toast.loading("Sending message...", { autoClose: 5000, position: 'top-center' })
    axios.post(`${process.env.REACT_APP_BACKEND_URI}/contact`, { 
      name, email, subject, message
    }).then(res => { 
      toast.update(submitToast, { render: res.data.message, type: "success", isLoading: false, autoClose: 5000 });
      setName('')
      setEmail('')
      setSubject('Commission Work')
      setMessage('')
    }).catch(err => {
      console.log(err)
      toast.update(submitToast, {render: 'Something went wrong :(', type: "error", isLoading: false, autoClose: 5000 });
    });
  }

  return (
    <Container>
        <Header>contact me</Header>
        
        <CardSubmitContainer>
          <SubmitForm>
            <Card>
              <Info>
                <Input>
                  <h4>name / company</h4>
                  <input type="text" required onChange={e => setName(e.target.value)} value={name} />
                </Input>

                <Input>
                  <h4>email</h4>
                  <input type="email" required onChange={e => setEmail(e.target.value)} value={email} />
                </Input>

                <Input>
                  <h4>subject</h4>
                  <select required onChange={e => setSubject(e.target.value)} value={subject}>
                    <option value='Commission Work'>Commission Work</option>
                    <option value='Question'>Question</option>
                    <option value='General Enquiry'>General Enquiry</option>
                  </select>
                </Input>
              </Info>

              <Message>
                <h4>Message</h4>
                <textarea cols="40" rows="12" onChange={e => setMessage(e.target.value)} value={message} required></textarea>
              </Message>
            </Card> 

            <Submit onClick={e => handleSubmit(e)}>submit</Submit>
          </SubmitForm>
          <StyledToastContainer />

        </CardSubmitContainer>
    </Container>
  )
}

const Container = styled.main`
  background-color: var(--theme-lightpink);
`

const Header = styled.h2`
  padding: 50px;
  text-align: center;
`

const CardSubmitContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Card = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: var(--theme-boxshadow);
  display: flex;
  width: max-content;

  h4 {
    margin-bottom: 4px;
    text-align: center;
  }

  > * {
    margin: 1.5rem;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.div`
  margin: 1rem;

  input {
    border-color: lightgrey;
    border-style: dashed;
    box-shadow: none;
    color: var(--theme-darkgrey);
    width: 30ch;
  }

  select {
    box-shadow: none;
    border-color: lightgrey;
    border-style: dashed;
    color: var(--theme-darkgrey);
    width: 100%;
  }
`

const Message = styled.div`
  margin: 2.5rem;

  textarea {
    resize: none;
    border-color: lightgrey;
    border-style: dashed;
    box-shadow: none;
    color: var(--theme-darkgrey);
    height: calc(100% - 1.6rem);
  }
`

const Submit = styled.button`
  background-color: #ff9090;
  border: none;
  border-radius: 50px;
  box-shadow: var(--theme-boxshadow);
  color: var(--theme-darkgrey);
  text-transform: uppercase;
  letter-spacing: 1.42px;
  margin: 1.5rem;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  width: fit-content;

  &:hover {
    filter: brightness(1.05);
  }
`

const StyledToastContainer = styled(ToastContainer)`
  z-index: 9999999;
`