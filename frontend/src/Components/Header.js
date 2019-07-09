import React, {Component} from 'react'
import Option from "./Option"
import AddComic from "./AddComic"
import AddSubscriber from "./AddSubscriber"
import ViewSub from "./ViewSub"
import { Navbar, Button, Container, Row, Col } from 'react-bootstrap'
import './app.css'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            addComic: false,
            addSubscriber: false,
            viewSub: false
        }
    }

    addComic = () =>{
        this.state.addComic === false && this.state.addSubscriber === false && this.state.viewSub === false?
        this.setState({
            addComic: true
        }) :
        this.setState({
            addComic: false
        })
    }

    addSubscriber = () =>{
        this.state.addSubscriber === false && this.state.addComic === false && this.state.viewSub === false?
        this.setState({
            addSubscriber: true
        }) :
        this.setState({
            addSubscriber: false
        })
    }

    viewSub = () => {
        console.log("here")
        this.state.addSubscriber === false && this.state.addComic === false && this.state.viewSub === false ? 
        this.setState({
            viewSub: true
        }) :
        this.setState({
            viewSub: false
        })
    }

    
    render(){
        return(
            <div >
                <Container>
                    <Row>
                        <Col >
                <Navbar >
                    <Navbar.Brand >Filter:</Navbar.Brand>
                    <select className="mr-3" onChange={e=>this.props.filter(e)}>
                    <option value="all"> All Subscribers </option>
                    {this.props.allCustomers.map((customer)=>{return <Option key={customer._id} customer={customer}/>})}
                    </select>
                    <Button className="mr-3" variant="primary" onClick={this.viewSub}>View Subscribers</Button>
                    <Button className="mr-3" variant="primary" onClick={this.addComic}>Add Comic</Button>
                    <Button className="mr-3" variant="primary" onClick={this.addSubscriber}>Add Subscriber</Button>
                    </Navbar>
                    </Col>
                    </Row>
                    </Container>
                    {this.state.viewSub === false ? null : 
                    <div>
                        <ViewSub allCustomers={this.props.allCustomers} getFetch={this.props.getFetch}/>
                    </div>
                    }
                    {this.state.addComic === false ? null : 
                    <div>
                        <AddComic allCustomers={this.props.allCustomers} getFetch={this.props.getFetch}/>
                    </div>
                    }
                    {this.state.addSubscriber === false ? null : 
                    <div>
                        <AddSubscriber getFetch={this.props.getFetch}/>
                    </div>
                    }
            </div>
        )
    }
}
export default Header