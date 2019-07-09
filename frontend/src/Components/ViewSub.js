import React, {Component} from "react"
import CustomerCard from "./CustomerCard"
import {CardGroup} from 'react-bootstrap'

class ViewSub extends Component {
    render(){
        return(
            <div>
                <CardGroup>
                {this.props.allCustomers.map((customer)=>{return <CustomerCard key={customer._id} customer={customer} getFetch={this.props.getFetch}/>})}
                </CardGroup>
            </div>
        )
    }
}

export default ViewSub