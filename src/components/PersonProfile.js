import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PersonProfile(props){
    return (
        <Card style={{ width: '15rem' }, {marginTop: '1rem'}}>
            <Card.Body>
                <Card.Title>{props.instrument}</Card.Title>
                <Card.Subtitle>{props.genre}</Card.Subtitle>
                <Card.Text>
                    {props.name}
                    
                </Card.Text>
                
                <Button variant="primary">Full profile</Button>
            </Card.Body>
        </Card>
    )
}

export default PersonProfile