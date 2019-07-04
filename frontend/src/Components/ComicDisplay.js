import React, {Component} from 'react'
import ComicCard from "./ComicCard"

class ComicDisplay extends Component{
    render(){
        return(
            <div>
                Comic Card
                {this.props.displayedComics.map(comic=><ComicCard key={comic._id} comic={comic} allCustomers={this.props.allCustomers} getFetch={this.props.getFetch}/>)}
            </div>
        )
    }
}
export default ComicDisplay