import React, {Component} from "react"

class CustomerCard extends Component {
    constructor(props){
        super(props)
        this.state={
            edit: false
        }
    }

    edit = (e) => {
        e.preventDefault()
        this.setState({
            edit: true
        })
    }

    submit = (e) => {
        e.preventDefault()
        this.setState({
            edit: false
        })
        let key = this.props.customer._id
        let newEdits = document.getElementById('editForm')
        let patchCustomer = {
            firstName: newEdits[0].value, 
            lastName: newEdits[1].value, 
            phoneNumber: newEdits[2].value,
            email: newEdits[3].value
        }
        fetch(`http://localhost:3000/customers/${key}`,{
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(patchCustomer)
        })
        .then(
            this.props.getFetch
        )
    }

    render(){
        return(
            <div>
                <form id="editForm">
                    <h1>First Name:{this.state.edit === false ? ` ${this.props.customer.firstName}`:  <input type="text" name="firstName" defaultValue={this.props.customer.firstName}/>}</h1>
                    <h4>Last Name:{this.state.edit === false ? ` ${this.props.customer.lastName}`:  <input type="text" name="lastName" defaultValue={this.props.customer.lastName}/>}</h4>
                    <h4>Phone Number:{this.state.edit === false ? ` ${this.props.customer.phoneNumber}`:  <input type="text" name="phoneNumber" defaultValue={this.props.customer.phoneNumber}/>}</h4>
                    <h4>Email:{this.state.edit === false ? ` ${this.props.customer.email}`:  <input type="text" name="email" defaultValue={this.props.customer.email}/>}</h4>

                    {this.state.edit === false ? <button onClick={e=>this.edit(e)}>Edit</button>: null}
                    {this.state.edit === true ? <button onClick={e=>this.submit(e)}>Submit</button>: null}
                    <br></br>
                    </form>
            </div>
        )
    }
}
export default CustomerCard