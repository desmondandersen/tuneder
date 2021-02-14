import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Login from './components/Login.js';
import Routes from './Routes.js'

function App() {

  
  return (
    <div className = "App">
      <Navbar collapseOnSelect bg = "light" expand = "md">
        <Navbar.Brand>
          Search
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar>
      <Routes/>
      <Login/>
    </div>
  );
}

export default App;