import React, {Component} from "react"
import {Form, Button, Card } from 'react-bootstrap'


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
        let patchCustomer = {
            firstName: document.getElementsByClassName(`${this.props.customer._id}`)[0].children[1].value, 
            lastName: document.getElementsByClassName(`${this.props.customer._id}`)[0].children[4].value, 
            phoneNumber: document.getElementsByClassName(`${this.props.customer._id}`)[0].children[7].value,
            email: document.getElementsByClassName(`${this.props.customer._id}`)[0].children[10].value
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
                <Card>
                <Form className={this.props.customer._id}>
                    <Form.Label>First Name:</Form.Label>{this.state.edit === false ? ` ${this.props.customer.firstName}`:  <Form.Control type="text" name="firstName" defaultValue={this.props.customer.firstName}/>}
                    <br/>
                    <Form.Label>Last Name:</Form.Label>{this.state.edit === false ? ` ${this.props.customer.lastName}`:  <Form.Control type="text" name="lastName" defaultValue={this.props.customer.lastName}/>}
                    <br/>
                    <Form.Label>Phone Number:</Form.Label>{this.state.edit === false ? ` ${this.props.customer.phoneNumber}`:  <Form.Control type="text" name="phoneNumber" defaultValue={this.props.customer.phoneNumber}/>}
                    <br/>
                    <Form.Label>Email:</Form.Label>{this.state.edit === false ? ` ${this.props.customer.email}`:  <Form.Control type="text" name="email" defaultValue={this.props.customer.email}/>}

                    {this.state.edit === false ? <Button variant="warning" onClick={e=>this.edit(e)}>Edit</Button>: null}
                    {this.state.edit === true ? <Button variant="success" onClick={e=>this.submit(e)}>Submit</Button>: null}
                    <br></br>
                </Form>
                </Card>
            </div>
        )
    }
}
export default CustomerCard