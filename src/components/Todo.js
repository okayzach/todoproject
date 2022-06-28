import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeOne, clearTodo } from '../features/todoSlice'
import Button from 'react-bootstrap/Button'

function Todo() {
    const items = useSelector((state) => state.todos.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const renderItems = items.map((item, index) => <li key={index} onClick={() => dispatch(removeOne(index))}>{item}</li>)

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <Button variant="primary" type="submit">Submit</Button>
            </form>
            <ul>
                {renderItems}
            </ul>
            <button onClick={() => dispatch(clearTodo())}>Clear</button>
            
        </div>
    )
}

export default Todo

{/* <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */}