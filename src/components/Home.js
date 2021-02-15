import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Home() {
    return(
        <div className = "Home">
            <div className = "initializer">
                <h1> Welcome to Tuneder!</h1>
            </div>

            <Container>
                <Row>
                    <Col>Venues Hiring Near Me</Col>
                    <Col>Musicians Near Me</Col>
                    <Col xs lg="2">Friends</Col>
                </Row>

                <Row>
                    <Col>Bar #1</Col>
                    <Col>Joe Bruin</Col>
                    <Col xs lg="2">Jean</Col>
                </Row>

                <Row>
                    <Col>Community Center</Col>
                    <Col>Jill Bruin</Col>
                    <Col xs lg="2">Josh</Col>
                </Row>

                <Row>
                    <Col>Wedding Venue</Col>
                    <Col>Jimmy Bruin</Col>
                    <Col xs lg="2">Jack</Col>
                </Row>
            </Container>

        </div>


    )
}