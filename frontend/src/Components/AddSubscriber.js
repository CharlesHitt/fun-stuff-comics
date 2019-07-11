import React, {Component} from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

class AddSubscriber extends Component{
    handleSubmit = (e) =>{
        e.preventDefault()
        debugger
        let newSub = {
            firstName: document.getElementById('subform')[0].value,
            lastName: document.getElementById('subform')[2].value,
            phoneNumber: document.getElementById('subform')[1].value,
            email: document.getElementById('subform')[3].value
        }//newSub
        console.log(newSub)
        fetch('http://localhost:3000/customers',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newSub)
        }) //fetch
        .then(
            document.getElementById('subform').reset()
        ).then(
            this.props.getFetch
        )//then(second)
    }//handleSubmit
    render(){
        return (
            <div>
                <Container>
                <Form onSubmit={e=>this.handleSubmit(e)} id="subform">
                    <Row>
                        <Col>
                        <Form.Label class="text-white">First Name:</Form.Label>
                        <Form.Control type="text" name="firstName" />
                        <Form.Label class="text-white">Phone Number:</Form.Label>    
                        <Form.Control type="text" name="phoneNumber"/>
                        </Col>
                        <Col>
                        <Form.Label class="text-white">Last Name:</Form.Label>     
                        <Form.Control type="text" name="lastName"/>
                        <Form.Label class="text-white">Email:</Form.Label>    
                        <Form.Control type="text" name="email"/>
                        </Col>
                    </Row>
                    <br/>
                    <Button variant="success" type="submit">Submit</Button>
                    </Form>
                </Container>
                <br></br>
            </div>
        ) //render
    } //return
} //Component
export default AddSubscriber