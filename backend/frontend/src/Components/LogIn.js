import React, {Component} from 'react'
import {Button, Form, Container, Row, Col} from 'react-bootstrap'

class LogIn extends Component {
    render(){
        return(
            <div>
                <Container>
                    <Row >
                        <Col sm={8}>
                            <Form onSubmit={e=>this.props.pants(e)} id="loginform">
                                <Form.Label>Username:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" />
                                <Form.Label>Password:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter password"/>
                                <br></br>
                                <Button variant="success" type="submit"> Submit </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )//return
    }//render
}//Component
export default LogIn