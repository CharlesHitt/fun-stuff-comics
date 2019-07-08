import React, {Component} from "react"
import CustomerCard from "./CustomerCard"

class ViewSub extends Component {
    render(){
        return(
            <div>
                {this.props.allCustomers.map((customer)=>{return <CustomerCard key={customer._id} customer={customer} getFetch={this.props.getFetch}/>})}
            </div>
        )
    }
}

export default ViewSub