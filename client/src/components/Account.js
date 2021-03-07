import React from 'react';
import { Link } from 'react-router-dom';
import {  Redirect } from 'react-router-dom';




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
        <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
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
  