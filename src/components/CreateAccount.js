import "./CreateAccount.css"

import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function CreateAccount() {
    
    function handleClick(){
        console.log("Button clicked")
    }

    return(
        <div className = "Login">
            <Form >
                I am a...
                <br></br>
                <br></br>
                <Button onClick = {handleClick}>
                    Musician
                </Button>
                <br></br><br></br>
                <Button onClick = {handleClick}>
                    Venue
                </Button>

            </Form>
        </div>
    )
}
