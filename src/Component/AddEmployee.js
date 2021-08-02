import React, {Component} from 'react';
import { Form, Col, FormGroup, Checkbox } from 'react-bootstrap'
import '../Styles/AddEmployee.css'
import {Link} from 'react-router-dom'

class AddEmployee extends Component{
    constructor(props){
        super(props);
        this.state = {
            gender:''
        }
    }
    prinot(evt){
        console.log(evt.target)
    }
    handleChange = (evt) => {
        this.setState({gender: evt.target.value});
    }
  
    handleSubmit = (evt) => {
        evt.preventDefault();
        const link = evt.target.elements.link.value
        const firstName = evt.target.elements.firstName.value
        const lastName = evt.target.elements.lastName.value
        const country = evt.target.elements.country.value
        const city = evt.target.elements.city.value
        const email = evt.target.elements.email.value
        const phone = evt.target.elements.phone.value
        const gender = this.state.gender
        const employee = {
            'id':{
                'value':Number(new Date())
            },
            'name':{
                'first':firstName,
                'last':lastName
            },
            'location':{
                'country':country,
                'city':city
            },
            'picture':{
                'large':link,
                'medium':link
            },
            'gender':gender,
            'email': email,
            'phone':phone
        }
        if(firstName && lastName ){
            this.props.onAddEmployee(employee)
        }
    }
    render(){
        return(
            <div className='add-employee'>
            <div className='form'>
                <Form onSubmit={this.handleSubmit} >
                    <input type='text' placeholder='First Name'name='firstName'/>
                    <input type='text' placeholder='Last Name'name='lastName'/>
                    <label for="gender" id='gender' className='gender-label'>   Gender</label>
                    <select className='select-gender' form='gender' name='gender' onChange={this.handleChange}>
                    <option value="male" name='gender'>Male</option>
                    <option value="female" name='gender'>Female</option>
                    <option value="other" name='gender'>Other</option>
                    </select>
                
                    <input type='text' placeholder='Email Address'name='email'/>
                    <input type='text' placeholder='Phone'name='phone'/>
                                        <input type='text' placeholder='City'name='city'/>
                    <input type='text' placeholder='Country'name='country'/>

                    <input type='text' className='profile-picture' placeholder='Profile Picture' name='link'/>
                    <div>
                        <button className='add-button'>Add</button>
                        <Link to='/'><button className='add-button'>Discard</button></Link>
                    </div>
                </Form>
            </div>
            </div>
        )
    }
}

export default AddEmployee;