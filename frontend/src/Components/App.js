import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ComicContainer from './ComicContainer';
import LogIn from './LogIn';



class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedIn: false
    }
  }

  pants = (e) => {
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
     
        <div className="container">
          <h2>Fun Stuff Comics</h2>

          {this.state.loggedIn === true?
          <button onClick={e=>this.logOut(e)}>Log Out</button>
        : null }

          {this.state.loggedIn === true ?
          <ComicContainer /> :
            null 
            }

            {this.state.loggedIn === false ? 
            <LogIn pants={this.pants}/> :
            null
            }
        </div>
      
    )
  }
}

export default App;


//Conditional rendering for quick front end authentication

