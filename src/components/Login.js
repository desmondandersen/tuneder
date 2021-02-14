import "./Login.css"

import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function Login() {
    //create constructor for username, password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //make sure entries are valid TODO: 0 length for now, but change to 5 & 8
    function validSubmission(){
        return username.length > 0 && password.length >0; 
    }





    return(
        <div className = "Login">
            <Form>
                <Form.Group controlId = "username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        placeholder="username"
                        onChange = {(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId = "password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        placeholder="password"
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button>
                    Login
                </Button>
            </Form>
        </div>
    )
}
