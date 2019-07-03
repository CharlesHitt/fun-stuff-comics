import React, {Component} from 'react'

class ComicOption extends Component{
    render(){
        return (
                <option value={this.props.customer._id}> {this.props.customer.firstName} {this.props.customer.lastName}</option>
        )
    }
}
export default ComicOption