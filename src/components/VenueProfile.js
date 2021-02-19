import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function VenueProfile(props) {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.artist}
                </Card.Text>
                <Button variant="primary">Learn more</Button>
            </Card.Body>
        </Card>
    )
}

export default VenueProfile