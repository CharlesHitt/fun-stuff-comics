import React, {Component} from 'react'

class LogIn extends Component {
    render(){
        return(
            <div>
                <form onSubmit={e=>this.props.pants(e)} id="loginform">
                    Username:
                    <input type="text" name="username" />
                    Password:
                    <input type="text" name="password" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default LogIn