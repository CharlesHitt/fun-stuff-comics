import React, {Component} from 'react'
import Header from "./Header"
import ComicDisplay from "./ComicDisplay"

let ComicAPI = "http://localhost:3000/comics"
let CustomerAPI = "http://localhost:3000/customers"
class ComicContainer extends Component {
    constructor(){
        super()
        this.state = {
            allCustomers: [],
            allComics: [],
            isLoading: true,
            alsoLoading: true,
            displayedComics: []
        }
    }
    componentDidMount(){
        fetch(ComicAPI)
        .then(res=>res.json())
        .then(data=>
            this.setState({
                allComics: data,
                displayedComics: data,
                isLoading: false
            }))
        fetch(CustomerAPI)
        .then(res=>res.json())
        .then(data=>
            this.setState({
                allCustomers: data,
                alsoLoading: false
            }))
    }

    filter = (e) =>{
        if (e.target.value === "all"){
        this.setState({
            displayedComics: this.state.allComics
        })}
        else{
            this.setState({
                displayedComics: this.state.allComics.filter(comic=>comic.sub === e.target.value)
                
            })
        }     
    }

    render() {
        return (
            <div>
                {this.state.isLoading === true ? "is loading..." : 
                <div>
                    {this.state.alsoLoading === true ? "still loading...":
                    <div>
                        Comic Container
                        <Header allCustomers={this.state.allCustomers} filter={this.filter}/>
                        <ComicDisplay displayedComics={this.state.displayedComics}/>
                    </div>
                    }
                </div>
                }
            </div>
        )
    }
}

export default ComicContainer