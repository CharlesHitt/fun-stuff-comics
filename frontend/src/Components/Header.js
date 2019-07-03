import React, {Component} from 'react'
import Option from "./Option"
import AddComic from "./AddComic"
import AddSubscriber from "./AddSubscriber"

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            addComic: false,
            addSubscriber: false
        }
    }

    addComic = () =>{
        this.state.addComic === false && this.state.addSubscriber === false?
        this.setState({
            addComic: true
        }) :
        this.setState({
            addComic: false
        })
    }

    addSubscriber = () =>{
        this.state.addSubscriber === false && this.state.addComic === false ?
        this.setState({
            addSubscriber: true
        }) :
        this.setState({
            addSubscriber: false
        })
    }

    
    render(){
        return(
            <div>
                Header
                    <strong>Filter:</strong>
                    <select onChange={e=>this.props.filter(e)}>
                    <option value="all"> All Subscribers </option>
                    {this.props.allCustomers.map((customer)=>{return <Option key={customer._id} customer={customer}/>})}
                    </select>
                    <button onClick={this.addComic}>Add Comic</button>
                    <button onClick={this.addSubscriber}>Add Subscriber</button>
                    {this.state.addComic === false ? null : 
                    <div>
                        <AddComic allCustomers={this.props.allCustomers}/>
                    </div>
                    }
                    {this.state.addSubscriber === false ? null : 
                    <div>
                        <AddSubscriber/>
                    </div>
                    }
            </div>
        )
    }
}
export default Header