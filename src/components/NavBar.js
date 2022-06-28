import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'

function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">React Todo-List App</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar