import React, { useRef } from 'react'
import {Button, Container, Form} from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

function Login({onIdSubmit}) {
   const idRef= useRef()

   function handleSubmit(e){
        e.preventDefault()
        onIdSubmit(idRef.current.value)
   }

   function createNewId(){
      onIdSubmit(uuidV4())
   }

  return (
    <Container className='d-flex align-items-center ' style={{height: '100vh'}}>
        <Form onSubmit={handleSubmit} className='w-100'>
            <Form.Group>
                <Form.Label>Enter  ID:</Form.Label>
                <Form.Control type='text' ref={idRef}  required/>
            </Form.Group>
            <Button type='submit' className='mr-2'>Login</Button>
            <Button onClick={createNewId}  variant="secondary">Create a new ID</Button>
        </Form>
    </Container>
  )
}

export default Login;