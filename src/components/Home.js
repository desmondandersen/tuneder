import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import VenueProfile from "./VenueProfile";

// to be replaced with database info
const venues = [
    {
        name: "Geraldo's Pub",
        artist: "Rock Cover Band"
    },
    {
        name: "Whiskey-A-Go-Go",
        artist: "Folk Solo"
    },
    {
        name: "Dodger Stadium",
        artist: "U2"
    },
    {
        name: "Joe's Backyard",
        artist: "Mariachi Band"
    }
]

export default function Home() {
    return(
        <div className = "Home">
            <div className="Venues">
                {
                    venues.map( venue => {
                        return <VenueProfile 
                            name={venue.name}
                            artist={venue.artist}
                            key={venue.name}
                        />
                    })
                }
            </div>
            <Container>
                <Row>
                    <Col>Musicians Near Me</Col>
                    <Col xs lg="2">Friends</Col>
                </Row>

                <Row>
                    <Col>Joe Bruin</Col>
                    <Col xs lg="2">Jean</Col>
                </Row>

                <Row>
                    <Col>Jill Bruin</Col>
                    <Col xs lg="2">Josh</Col>
                </Row>

                <Row>
                    <Col>Jimmy Bruin</Col>
                    <Col xs lg="2">Jack</Col>
                </Row>
            </Container>

        </div>


    )
}