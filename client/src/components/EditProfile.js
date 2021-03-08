import React from 'react';
import { Form, Button } from 'react-bootstrap';

const EditProfile = () =>{
    if (sessionStorage.getItem('type')=='Musician'){

    }

    return(
        <div>
            <input value ="Name"/>
            <input value ="Email"/>
            <Button> Submit</Button>
        </div>
        
        
        
    )

}

export default EditProfile;