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
                        <Form.Label class="text-white">Title:</Form.Label>    
                        <Form.Control type="text" name="title" placeholder="Title"/>
                        <Form.Label class="text-white">Publisher:</Form.Label>    
                        <Form.Control type="text" name="publisher" placeholder="Publisher"/>
                        <Form.Label class="text-white">Release Date (YYMMDD):</Form.Label>    
                        <Form.Control type="text" name="releaseDate" placeholder="Release Date"/>
                        <Form.Label class="text-white">Genre:</Form.Label>    
                        <Form.Control type="text" name="genre" placeholder="Genre"/>
                        <Form.Label class="text-white">Image URL:</Form.Label>    
                        <Form.Control type="text" name="image_url" placeholder="Image URL"/>
                        </Col>
                        <Col>
                        <Form.Label class="text-white">Issue/Volume:</Form.Label>
                        <Form.Control type="text" name="issue" placeholder="Issue/Volume"/>
                        <Form.Label class="text-white">Writers:</Form.Label>    
                        <Form.Control type="text" name="writers" placeholder="Writers"/>
                        <Form.Label class="text-white">Number of Pages:</Form.Label>    
                        <Form.Control type="text" name="numberOfPages" placeholder="Number of Pages"/>
                        <Form.Label class="text-white">Description:</Form.Label>    
                        <Form.Control as="textarea" row="2" placeholder="Description"/>
                        </Col>
                        <Col>
                        <Form.Label class="text-white">Main Characters:</Form.Label>
                        <Form.Control type="text" name="mainCharacters" placeholder="Main Characters"/>
                        <Form.Label class="text-white">Artists:</Form.Label>    
                        <Form.Control type="text" name="artists" placeholder="Artists"/>
                        <Form.Label class="text-white">Maturity Level:</Form.Label>
                        <Form.Control type="text" name="maturityLevel" placeholder="Maturity Level"/>
                        <Form.Label class="text-white">Price:</Form.Label>    
                        <Form.Control type="text" name="price" placeholder="price"/><br></br>
                        <p class="text-white">Subscriber:</p>
                        <select>
                        {this.props.allCustomers.map(customer=><ComicOption key={customer._id} customer={customer}/>)}
                        </select>
                        <br></br>
                        <br/>
                        <Button variant="success" type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Container>
                        </Form.Group>
                </Form>
            </div>
        )//return
    }//render
}//Comonent
export default AddComic