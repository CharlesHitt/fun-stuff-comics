import React, {Component} from 'react'
import { Form, Button, Card } from 'react-bootstrap'


class ComicCard extends Component{
    constructor(props){
    super(props)
    this.state={
            hidden: true,
            edit: false
        }//this.state
    }//contstructor
    click = () =>{
        this.state.hidden === true ?
        this.setState({
            hidden: false
        }) :
        this.setState({
            hidden: true
        })//this.setState(second)
    }//click
    edit = (e) => {
        e.preventDefault()
        this.setState({
            edit: true
        })//this.setState
    }//edit
    submit = (e) => {
        e.preventDefault()
        this.setState({
            edit: false
        })//this.setState
        let key = this.props.comic._id
        debugger
        let patchComic = {
            title: document.getElementsByClassName(`${this.props.comic._id}`)[0].children[1].value, 
            issue: Number(document.getElementsByClassName(`${this.props.comic._id}`)[0].children[4].value), 
            mainCharacters: document.getElementsByClassName(`${this.props.comic._id}`)[0].children[7].value,
            publisher: document.getElementsByClassName(`${this.props.comic._id}`)[0].children[10].value,
            writers: document.getElementsByClassName(`${this.props.comic._id}`)[0].children[13].value,
            artists: document.getElementsByClassName(`${this.props.comic._id}`)[0].children[16].value,
            releaseDate: Number(document.getElementsByClassName(`${this.props.comic._id}`)[0].children[19].value),
            numberOfPages: Number(document.getElementsByClassName(`${this.props.comic._id}`)[0].children[22].value),
            maturityLevel: document.getElementsByClassName(`${this.props.comic._id}`)[0].children[25].value,
            genre: document.getElementsByClassName(`${this.props.comic._id}`)[0].children[28].value,
            description: document.getElementsByClassName(`${this.props.comic._id}`)[0].children[31].value,
            price: Number(document.getElementsByClassName(`${this.props.comic._id}`)[0].children[34].value)
        }//patchComic
        console.log(patchComic)
        fetch(`http://localhost:3000/comics/${key}`,{
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(patchComic)
        })//fetch
        .then(
            this.props.getFetch
        )//then
    }//submit
    deleteComic = (e) =>{
        e.preventDefault()
        let key = this.props.comic._id
        fetch(`http://localhost:3000/comics/${key}`,{
            method: `DELETE`
        })//fetch
        .then(
            this.props.getFetch
        )//then
    }//deleteComic
    findCustomer = () => {
        let result = this.props.allCustomers.find(customer=>customer._id===this.props.comic.sub)
        return result.firstName + " " + result.lastName
    }//findCustomer
    render(){
        return(
            <div>
            <Card  className="mr-3">
            <Card.Img variant="top" src={this.props.comic.image_url} onClick={this.click} style={{ width: '8rem'}}/>
            {this.state.hidden === true ? null : 
            <Form className={this.props.comic._id}>
            <Form.Label>Title:</Form.Label>{this.state.edit === false ? `${this.props.comic.title}`: <Form.Control type="text" name="title" defaultValue={this.props.comic.title}/>}<br/>
            <Form.Label>Issue:</Form.Label>{this.state.edit === false ? ` ${this.props.comic.issue}`:  <Form.Control type="text" name="issue" defaultValue={this.props.comic.issue}/>}<br/>
            <Form.Label>Main Characters:</Form.Label>{this.state.edit === false ? ` ${this.props.comic.mainCharacters}`:  <Form.Control type="text" name="mainCharacters" defaultValue={this.props.comic.mainCharacters}/>}<br/>
            <Form.Label>Publisher:</Form.Label>{this.state.edit === false ? ` ${this.props.comic.publisher}`:  <Form.Control type="text" name="publisher" defaultValue={this.props.comic.publisher}/>}<br/>
            <Form.Label>Writers:</Form.Label>{this.state.edit === false ? ` ${this.props.comic.writers}`:  <Form.Control type="text" name="writers" defaultValue={this.props.comic.writers}/>}<br/>
            <Form.Label>Artists:</Form.Label>{this.state.edit === false ? ` ${this.props.comic.artists}`:  <Form.Control type="text" name="artists" defaultValue={this.props.comic.artists}/>}<br/>
            <Form.Label>Release Date (YYMMDD):</Form.Label>{this.state.edit === false ? ` ${this.props.comic.releaseDate}`:  <Form.Control type="text" name="releaseDate" defaultValue={this.props.comic.releaseDate}/>}<br/>
            <Form.Label>Number of Pages:</Form.Label>{this.state.edit === false ? ` ${this.props.comic.numberOfPages}`:  <Form.Control type="text" name="numberOfPages" defaultValue={this.props.comic.numberOfPages}/>}<br/>
            <Form.Label>Maturity Level:</Form.Label>{this.state.edit === false ? ` ${this.props.comic.maturityLevel}`:  <Form.Control type="text" name="maturityLevel" defaultValue={this.props.comic.maturityLevel}/>}<br/>
            <Form.Label>Genre:</Form.Label>{this.state.edit === false ? ` ${this.props.comic.genre}`:  <Form.Control type="text" name="genre" defaultValue={this.props.comic.genre}/>}<br/>
            <Form.Label>Description:</Form.Label>{this.state.edit === false ? ` ${this.props.comic.description}`:  <Form.Control as="textarea" name="description" defaultValue={this.props.comic.description}/>}<br/>
            <Form.Label>Price:</Form.Label>{this.state.edit === false ? ` ${this.props.comic.price}`:  <Form.Control type="text" name="price" defaultValue={this.props.comic.price}/>}<br/>
            <Form.Label>Subscriber:</Form.Label> {this.findCustomer()} <br/>
            {this.state.edit === false ? <Button variant="warning" onClick={e=>this.edit(e)}>Edit</Button>: null}
            {this.state.edit === true ? <Button variant="success" onClick={e=>this.submit(e)}>Submit</Button>: null}
            {this.state.edit === true ? <Button variant="danger" onClick={e=>this.deleteComic(e)}>Delete</Button> : null }
            </Form>
            }
            </Card>
            </div>
        )//return
    }//render
}//Component
export default ComicCard