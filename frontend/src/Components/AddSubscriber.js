import React, {Component} from 'react'

class AddSubscriber extends Component{
    render(){
        return (
            <div>
                Add Subscriber
                <form>
                    <label>
                        First Name:
                        <input type="text" name="firstName"/>
                        Last Name: 
                        <input type="text" name="lastName"/>
                        Phone Number:
                        <input type="text" name="phoneNumber"/>
                        Email:
                        <input type="text" name="email"/>
                    </label>
                </form>
            </div>
        )
    }
}
export default AddSubscriber