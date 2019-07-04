import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ComicContainer from './ComicContainer';



class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedIn: false
    }
  }
  render(){
    return(
     
        <div className="container">
          <h2>Fun Stuff Comics</h2>


          <ComicContainer />
        </div>
      
    )
  }
}

export default App;


//Conditional rendering for quick front end authentication

