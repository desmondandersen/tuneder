import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class NewVenue extends React.Component {
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
                        <h1>Venue Profile</h1>
                        <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="name">
                          <Form.Label>Venue Name</Form.Label>
                          <Form.Control type="name" placeholder="Enter your name" />
                        </Form.Group>
                        
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
                        
                          <Form.Group>
                        <Form.File 
                            id="venuepic"   
                            label="Upload a picture of the venue" 
                            custom
                        />
                          </Form.Group>
                        <Form.Group controlId="audience size">
                            <Form.Label>What is the size of your audience?</Form.Label>
                            <Form.Control as="select">
                              <option> &gt;30</option>
                              <option>30-100</option>
                              <option>100-200</option>
                              <option>200+</option>
                            </Form.Control>
                          </Form.Group>
                        <Form.Group controlId="Info">
                            <Form.Label>Tell potential musicians/bands about your venue! </Form.Label>
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


            export default NewVenue;         