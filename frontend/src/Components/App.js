import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ComicContainer from './ComicContainer';
import LogIn from './LogIn';
import './app.css'
import { Navbar, Nav, Button } from 'react-bootstrap'




class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedIn: true
    }//this.state
  }//constructor

  pants = (e) => {
    e.preventDefault()
    if (e.target[0].value === "HotPink" && e.target[1].value === "ff69b4"){
      this.setState({
        loggedIn: true
      })//this.state
    }//if
    else {
      document.getElementById('loginform').reset()
    }//else
  }//pants

  logOut = (e) => {
    e.preventDefault()
    this.setState({
      loggedIn: false
    })//this.setState
  }//logOut

  render(){
    return(
      <div>
        <div className="upper-container">
              <Navbar >
           <Navbar.Brand>Fun Stuff Comics</Navbar.Brand>
          {this.state.loggedIn === true?
         <Nav className="ml-auto">
          <Button   variant="primary" onClick={e=>this.logOut(e)}>Log Out</Button>
        </Nav>
        : null }
        </Navbar>
        </div>
        <div className="lower-container">
              {this.state.loggedIn === true ?
          <ComicContainer /> 
            : null 
            }
            {this.state.loggedIn === false ? 
            <LogIn pants={this.pants}/> 
            : null
            }
        </div>
        </div>
      
    )
  }
}

export default App;


