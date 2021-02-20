
import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap"


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
                <LinkContainer to = '/new_musician'>
                        <Link> <Button> Musician 
                        </Button>
                         </Link>
                </LinkContainer>
                <br></br><br></br>
                <LinkContainer to = '/new_venue'>
                        <Link> <Button> Venue 
                        </Button>
                         </Link>
                </LinkContainer>

            </Form>
        </div>
    )
}
