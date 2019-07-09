import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ComicContainer from './ComicContainer';
import LogIn from './LogIn';
import './app.css'
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap'




class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedIn: true
    }
  }

  pants = (e) => {
    debugger
    e.preventDefault()
    if (e.target[0].value === "HotPink" && e.target[1].value === "ff69b4"){
      this.setState({
        loggedIn: true
      })
    }
    else {
      document.getElementById('loginform').reset()

    }
  }

  logOut = (e) => {
    e.preventDefault()
    this.setState({
      loggedIn: false
    })
  }



  render(){
    return(
      <div>
        <div >
          <Container >
            <Row>
              <Col className="upper-container">
              <Navbar >
           <Navbar.Brand>Fun Stuff Comics</Navbar.Brand>
          {this.state.loggedIn === true?
         <Nav className="ml-auto">
          <Button   variant="primary" onClick={e=>this.logOut(e)}>Log Out</Button>
        </Nav>
        : null }
        </Navbar>
              </Col>
            </Row>
          </Container>
          
        </div>
        <div >
          <Container>
            <Row>
              <Col className="lower-container">
              {this.state.loggedIn === true ?
          <ComicContainer /> 
            : null 
            }
            {this.state.loggedIn === false ? 
            <LogIn pants={this.pants}/> 
            : null
            }
              </Col>
            </Row>
          </Container>
          
        </div>
        </div>
      
    )
  }
}

export default App;


//Conditional rendering for quick front end authentication

