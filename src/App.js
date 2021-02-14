import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Login from './components/Login.js';
import Routes from './Routes.js'
import { LinkContainer } from "react-router-bootstrap"

function App() {

  
  return (
    <div className = "App">
      <Navbar collapseOnSelect bg = "light" expand = "md">
        <LinkContainer to= '/'>
          <Navbar.Brand>
            Home
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <LinkContainer to = '/create_account'>
              <Nav.Link> Create Account </Nav.Link>
            </LinkContainer>
            <LinkContainer to = '/login'>
              <Nav.Link> Log In </Nav.Link>
            </LinkContainer>
            <LinkContainer to = '/my_account'>
              <Nav.Link> My Account </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes/>
    </div>
  );
}

export default App;