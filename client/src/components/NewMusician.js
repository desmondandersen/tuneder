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
                        <h1 >Create A New Musician Profile!</h1>
                        <Form className="text-left">
                          <Form.Row> 
                          <Col md={4} > 
                             <Form.Group ccontrolId="firstname">
                              <Form.Label> First Name</Form.Label>
                              <Form.Control type="name" placeholder="Enter first name" />
                            </Form.Group> 
                          </Col>
                          <Col md ={5}>
                          <Form.Group controlId="lastname">
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control type="name" placeholder="Enter last name" />
                            </Form.Group>
                          </Col>
                          </Form.Row>
                           

                        <Form.Row> 
                        <Col md={4}> 
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                          </Form.Group>
                        </Col>

                        <Col>  
                        <Form.Group>
                          <Form.File id="profilepic" label="Upload a profile picture"  />
                         </Form.Group>
                         </Col>

                        </Form.Row>
                        
                        
                        
                
                        <Col md={9}> 
                          <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="8 characters minimum" />
                          </Form.Group>
                        </Col>
                        <Col md={9}>
                        <Form.Group controlId="location">
                          <Form.Label>Location</Form.Label>
                          <Form.Control type="location" placeholder="Anytown, CA, USA" />
                        <Form.Text className="text-muted">
                          Please enter in form Town, State, Country
                        </Form.Text>
                        </Form.Group>
                        </Col>
                      
                       
                        

                        <Col md={7}> 
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
                          </Col>
                          
                          <Col md={7}>
                         
                          <Form.Group controlId="primaryexpertise">
                            <Form.Label>Expertise Level</Form.Label>
                            <Form.Control type="range" />
                            </Form.Group>
                          </Col>
                          <Col md={7}> 
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
                          </Col>
                        <Col md={7}> 
                        <Form.Group controlId="secondaryexpertise">
                            <Form.Label>Expertise Level</Form.Label>
                            <Form.Control type="range" />
                        </Form.Group>
                        </Col>
                        
                        <Col md={7}> 
                        <Form.Group controlId="moreInfo">
                            <Form.Label>Short Bio, and any other info you want on your profile</Form.Label>
                            <Form.Control as="textarea" rows={7} />
                          </Form.Group>
                        </Col>
                       
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Form>
                        </div>
                );
              }
            }

export default NewMusician;


              
              