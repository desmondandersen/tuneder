import React from 'react';
import { Link } from 'react-router-dom';



// Import bootstrap components
import Button from 'react-bootstrap/Button';

function UserGreeting(props){
    return(
        <div> 
            <h1>Welcome back!</h1>
        <Button> Edit Info</Button>
        </div> 
        
    )

}

function GuestGreeting(props){
    return(
        <div>
            <h1>Please log in or create an account</h1>
            <br />
            <br />
            <Link to='/create-account'>
            <Button>Create Account</Button>
            </Link>
            <br />
            <br />
            <Link to='/login'>
            <Button>Log In</Button>
            </Link>
        </div>
    )
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn){
        return <UserGreeting />
    }
    return <GuestGreeting />
}

const Account = () => {
    return (
      <div >
        <Greeting isLoggedIn={true}/>
      </div>
    );
  };
  
  export default Account;
  