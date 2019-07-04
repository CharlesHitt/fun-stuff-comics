import React, {Component} from 'react'

class ComicCard extends Component{
    constructor(props){
    super(props)
    this.state={
            hidden: true,
            edit: false
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

    edit = (e) => {
        e.preventDefault()
        this.setState({
            edit: true
        })
    }

    submit = (e) => {
        e.preventDefault()
        this.setState({
            edit: false
        })
        let key = this.props.comic._id
        let newEdits = document.getElementById('editForm')
        let patchComic = {
            title: newEdits[0].value, 
            issue: Number(newEdits[1].value), 
            mainCharacters: newEdits[2].value,
            publisher: newEdits[3].value,
            writers: newEdits[4].value,
            artists: newEdits[5].value,
            releaseDate: Number(newEdits[6].value),
            numberOfPages: Number(newEdits[7].value),
            maturityLevel: newEdits[8].value,
            genre: newEdits[9].value,
            description: newEdits[10].value,
            price: Number(newEdits[11].value)
        }
        debugger
        console.log(patchComic)
        fetch(`http://localhost:3000/comics/${key}`,{
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(patchComic)
        })
        .then(
            this.props.getFetch
        )
    }
    
    deleteComic = (e) =>{
        e.preventDefault()
        console.log("soon this will delete the comic... GASP!")
    }
    findCustomer = () => {
        let result = this.props.allCustomers.find(customer=>customer._id===this.props.comic.sub)
        return result.firstName + " " + result.lastName
    }
    render(){
        return(
            <div>
                <img src={this.props.comic.image_url} alt='' width={100} height={150} onClick={this.click}></img> 
                {this.state.hidden === true ? null :
                <div>
                    <form id="editForm">
                    <h1>Title:{this.state.edit === false ? ` ${this.props.comic.title}`:  <input type="text" name="title" defaultValue={this.props.comic.title}/>}</h1>
                    <h4>Issue:{this.state.edit === false ? ` ${this.props.comic.issue}`:  <input type="text" name="issue" defaultValue={this.props.comic.issue}/>}</h4>
                    <h4>Main Characters:{this.state.edit === false ? ` ${this.props.comic.mainCharacters}`:  <input type="text" name="mainCharacters" defaultValue={this.props.comic.mainCharacters}/>}</h4>
                    <h4>Publisher:{this.state.edit === false ? ` ${this.props.comic.publisher}`:  <input type="text" name="publisher" defaultValue={this.props.comic.publisher}/>}</h4>
                    <h4>Writers:{this.state.edit === false ? ` ${this.props.comic.writers}`:  <input type="text" name="writers" defaultValue={this.props.comic.writers}/>}</h4>
                    <h4>Artists:{this.state.edit === false ? ` ${this.props.comic.artists}`:  <input type="text" name="artists" defaultValue={this.props.comic.artists}/>}</h4>
                    <h4>Release Date (YYMMDD):{this.state.edit === false ? ` ${this.props.comic.releaseDate}`:  <input type="text" name="releaseDate" defaultValue={this.props.comic.releaseDate}/>}</h4>
                    <h4>Number of Pages:{this.state.edit === false ? ` ${this.props.comic.numberOfPages}`:  <input type="text" name="numberOfPages" defaultValue={this.props.comic.numberOfPages}/>}</h4>
                    <h4>Maturity Level:{this.state.edit === false ? ` ${this.props.comic.maturityLevel}`:  <input type="text" name="maturityLevel" defaultValue={this.props.comic.maturityLevel}/>}</h4>
                    <h4>Genre:{this.state.edit === false ? ` ${this.props.comic.genre}`:  <input type="text" name="genre" defaultValue={this.props.comic.genre}/>}</h4>
                    <h4>Description:{this.state.edit === false ? ` ${this.props.comic.description}`:  <textarea type="textarea" name="description" defaultValue={this.props.comic.description}/>}</h4>
                    <h4>Price:{this.state.edit === false ? ` ${this.props.comic.price}`:  <input type="text" name="price" defaultValue={this.props.comic.price}/>}</h4>
                    <h4>Subscribers: {this.findCustomer()} </h4>

                    {this.state.edit === false ? <button onClick={e=>this.edit(e)}>Edit</button>: null}
                    {this.state.edit === true ? <button onClick={e=>this.submit(e)}>Submit</button>: null}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {this.state.edit === true ? <p>There is no turning back if you delete... just kidding you can always remake it.</p> : null}
                    {this.state.edit === true ? <button onClick={e=>this.deleteComic(e)}>Delete</button> : null }
                    </form>
                </div>
                }
            </div>
        )
    }
}
export default ComicCard