import React, {Component} from 'react'

class AddSubscriber extends Component{
    handleSubmit = (e) =>{
        e.preventDefault()
        let newSub = {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            phoneNumber: e.target[2].value,
            email: e.target[3].value
        }
        console.log(newSub)
        fetch('http://localhost:3000/customers',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newSub)
        })
        .then(
            document.getElementById('subform').reset()
        ).then(
            this.props.getFetch
        )

    }
    render(){
        return (
            <div>
                Add Subscriber
                <form onSubmit={e=>this.handleSubmit(e)} id="subform">
                    <label>
                        First Name:
                        <input type="text" name="firstName"/>
                        Last Name: 
                        <input type="text" name="lastName"/>
                        Phone Number:
                        <input type="text" name="phoneNumber"/>
                        Email:
                        <input type="text" name="email"/>
                        <br></br>
                        <input type="submit" value="Submit"/>
                    </label>
                </form>
            </div>
        )
    }
}
export default AddSubscriber