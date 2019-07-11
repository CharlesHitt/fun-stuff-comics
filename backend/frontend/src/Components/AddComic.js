import React, {Component} from 'react'
import ComicOption from './ComicOption'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

class AddComic extends Component{ 
    handleSubmit = (e) =>{
        e.preventDefault()
        let shirt = document.getElementById('comicform')
        let newComic = {
            title: shirt[0].value, 
            issue: Number(shirt[5].value), 
            mainCharacters: shirt[9].value,
            publisher: shirt[1].value,
            writers: shirt[6].value,
            artists: shirt[10].value,
            releaseDate: Number(shirt[2].value),
            numberOfPages: Number(shirt[7].value),
            maturityLevel: shirt[11].value,
            genre: shirt[3].value,
            description: shirt[8].value,
            price: Number(shirt[12].value),
            image_url: shirt[4].value,
            sub: shirt[13].value
        }//newComic
        console.log(newComic)
        fetch('http://localhost:3000/comics',{
        method: 'POST',
        headers: {
            // 'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newComic)
        })//fetch
        .then(
            document.getElementById('comicform').reset()
        ).then(
            this.props.getFetch
        )//then(second)
    }//handleSubmit
    render(){
        return(
            <div>
                <Form onSubmit={e=>this.handleSubmit(e)} id="comicform">
                <Form.Group>
                <Container>
                    <Row>
                        <Col>
                        <Form.Label>Title:</Form.Label>    
                        <Form.Control type="text" name="title"/>
                        <Form.Label>Publisher:</Form.Label>    
                        <Form.Control type="text" name="publisher"/>
                        <Form.Label>Release Date (YYMMDD):</Form.Label>    
                        <Form.Control type="text" name="releaseDate"/>
                        <Form.Label>Genre:</Form.Label>    
                        <Form.Control type="text" name="genre"/>
                        <Form.Label>Image URL:</Form.Label>    
                        <Form.Control type="text" name="image_url"/>
                        </Col>
                        <Col>
                        <Form.Label>Issue:</Form.Label>
                        <Form.Control type="text" name="issue"/>
                        <Form.Label>Writers:</Form.Label>    
                        <Form.Control type="text" name="writers"/>
                        <Form.Label>Number of Pages:</Form.Label>    
                        <Form.Control type="text" name="numberOfPages"/>
                        <Form.Label>Description:</Form.Label>    
                        <Form.Control as="textarea" row="2"/>
                        </Col>
                        <Col>
                        <Form.Label>Main Characters:</Form.Label>
                        <Form.Control type="text" name="mainCharacters"/>
                        <Form.Label>Artists:</Form.Label>    
                        <Form.Control type="text" name="artists"/>
                        <Form.Label>Maturity Level:</Form.Label>
                        <Form.Control type="text" name="maturityLevel"/>
                        <Form.Label>Price:</Form.Label>    
                        <Form.Control type="text" name="price"/><br></br>
                        Subscriber:
                        <select>
                        {this.props.allCustomers.map(customer=><ComicOption key={customer._id} customer={customer}/>)}
                        </select>
                        </Col>
                    </Row>
                </Container>
                        <br/>
                        <Button variant="success" type="submit">Submit</Button>
                        </Form.Group>
                </Form>
            </div>
        )//return
    }//render
}//Comonent
export default AddComic