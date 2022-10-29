import React, { useRef } from 'react'
import {Button, Container, Form} from 'react-bootstrap'

function Login() {
   const idRef= useRef()

   function handleSubmit(e){
        e.preventDefault()
        
   }
  return (
    <Container className='d-flex align-items-center ' style={{height: '100vh'}}>
        <Form onSubmit={handleSubmit} className='w-100'>
            <Form.Group>
                <Form.Label>Enter  ID:</Form.Label>
                <Form.Control type='text' ref={idRef}  required/>
                
            </Form.Group>
            <Button type='submit' className='mr-2'>Login</Button>
            <Button variant="secondary">Create a new ID</Button>
        </Form>
    </Container>
  )
}

export default Login;