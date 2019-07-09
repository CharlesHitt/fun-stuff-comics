import React, {Component} from 'react'
import ComicCard from "./ComicCard"
import { CardGroup } from 'react-bootstrap'

class ComicDisplay extends Component{
    render(){
        return(
            <div>
                <CardGroup>
                {this.props.displayedComics.map(comic=><ComicCard key={comic._id} comic={comic} allCustomers={this.props.allCustomers} getFetch={this.props.getFetch}/>)}
                </CardGroup>
            </div>
        )
    }
}
export default ComicDisplay