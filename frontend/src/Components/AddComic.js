import React, {Component} from 'react'
import ComicOption from './ComicOption'

class AddComic extends Component{
    
    handleSubmit = (e) =>{
        e.preventDefault()
        let newComic = {
            title: e.target[0].value, 
            issue: Number(e.target[1].value), 
            mainCharacters: e.target[2].value,
            publisher: e.target[3].value,
            writers: e.target[4].value,
            artists: e.target[5].value,
            releaseDate: Number(e.target[6].value),
            numberOfPages: Number(e.target[7].value),
            maturityLevel: e.target[8].value,
            genre: e.target[9].value,
            description: e.target[10].value,
            price: Number(e.target[11].value),
            image_url: e.target[12].value,
            sub: e.target[13].value
        }
        console.log(newComic)
        fetch('http://localhost:3000/comics',{
        method: 'POST',
        headers: {
            // 'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newComic)
        })
        .then(
            document.getElementById('comicform').reset()
        ).then(
            this.props.getFetch
        )

    }
    render(){
        return(
            <div>
                Add Comic
                <form onSubmit={e=>this.handleSubmit(e)} id="comicform">
                    <label>
                        Title:
                        <input type="text" name="title"/><br></br>
                        Issue:
                        <input type="text" name="issue"/><br></br>
                        Main Characters:
                        <input type="text" name="mainCharacters"/><br></br>
                        Publisher:
                        <input type="text" name="publisher"/><br></br>
                        Writers:
                        <input type="text" name="writers"/><br></br>
                        Artists:
                        <input type="text" name="artists"/><br></br>
                        Release Date (YYMMDD):
                        <input type="text" name="releaseDate"/><br></br>
                        Number of Pages:
                        <input type="text" name="numberOfPages"/><br></br>
                        Maturity Level:
                        <input type="text" name="maturityLevel"/><br></br>
                        Genre:
                        <input type="text" name="genre"/><br></br>
                        Description:
                        <textarea></textarea><br></br>
                        Price:
                        <input type="text" name="price"/><br></br>
                        Image URL:
                        <input type="text" name="image_url"/><br></br>
                        Subscriber:
                        <select>
                        {this.props.allCustomers.map(customer=><ComicOption key={customer._id} customer={customer}/>)}
                        </select><br></br>
                        <input type="submit" value="Submit"/>
                    </label>
                </form>
            </div>
        )
    }
}
export default AddComic