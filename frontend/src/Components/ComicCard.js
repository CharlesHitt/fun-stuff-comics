import React, {Component} from 'react'

class ComicCard extends Component{
    constructor(props){
    super(props)
    this.state={
            hidden: true
        }
    }

    click = () =>{
        this.state.hidden === true ?
        this.setState({
            hidden: false
        }) :
        this.setState({
            hidden: true
        })
    }
    render(){
        return(
            <div>
                <img src={this.props.comic.image_url} alt='' width={100} height={150} onClick={this.click}></img> 
                {this.state.hidden === true ? null :
                <div>
                    <h2>Title: {this.props.comic.title}</h2>
                    <h4>Publisher: {this.props.comic.publisher}</h4>
                    <h4>Writers: {this.props.comic.writers}</h4>
                    <h4>Artists: {this.props.comic.artists}</h4>
                    <h4>Release Date (YYMMDD): {this.props.comic.releaseDate}</h4>
                </div>
                }
            </div>
        )
    }
}
export default ComicCard