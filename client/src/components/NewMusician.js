import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

    

class NewMusician extends React.Component {
    constructor(props) {
                super(props);
                this.state = {value: ['guitar']};

                this.handleChange = this.handleChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
              }

              handleChange(event) {
                this.setState({value: Array.from(event.target.selectedOptions,(item) => item.value)});
              }

              handleSubmit(event) {
                alert('You submitted the form');
                event.preventDefault();
              }

              render() {
                return (
                        <div className="wrapper">
                        <h1>Musician Profile</h1>
                        <Form>
                          <Row> 
                            <Col> 
                            <Form.Group controlId="firstname">
                              <Form.Label> First Name</Form.Label>
                              <Form.Control type="name" placeholder="First name" />
                            </Form.Group>
                          </Col>
                          <Col>
                          <Form.Group controlId="lastname">
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control type="name" placeholder="Last name" />
                            </Form.Group>
                          </Col>
                        </Row>
                        
                        
                          <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                          </Form.Group>

                          <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                          </Form.Group>
                        <Form.Group controlId="location">
                          <Form.Label>Location</Form.Label>
                          <Form.Control type="location" placeholder="Anytown, CA, USA" />
                        <Form.Text className="text-muted">
                          Please enter in form Town, State, Country
                        </Form.Text>
                        </Form.Group>
                        
                          <Form.Group>
                        <Form.File id="profilepic" label="Upload a profile picture" custom />
                          </Form.Group>
                        <Form.Group controlId="primaryInstrument">
                            <Form.Label>Primary Instrument</Form.Label>
                            <Form.Control as="select">
                              <option>Drums</option>
                              <option>Piano</option>
                              <option>Guitar</option>
                              <option>Bass</option>
                              <option>Vocals</option>
                              <option>Other, add in notes section</option>
                            </Form.Control>
                          </Form.Group>
                            <Form.Group controlId="primaryexpertise">
                            <Form.Label>Expertise Level</Form.Label>
                            <Form.Control type="range" />
                            </Form.Group>
                        <Form.Group controlId="secondaryInstrument">
                            <Form.Label>Secondary Instrument</Form.Label>
                            <Form.Control as="select">
                              <option>Drums</option>
                              <option>Piano</option>
                              <option>Guitar</option>
                              <option>Bass</option>
                              <option>Vocals</option>
                            </Form.Control>
                          </Form.Group>
                        <Form.Group controlId="secondaryexpertise">
                            <Form.Label>Expertise Level</Form.Label>
                            <Form.Control type="range" />
                        </Form.Group>
                        
                        <Form.Group controlId="moreInfo">
                            <Form.Label>Short Bio, and any other info you want on your profile</Form.Label>
                            <Form.Control as="textarea" rows={7} />
                          </Form.Group>

                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Form>
                        </div>
                );
              }
            }

export default NewMusician;


              
              