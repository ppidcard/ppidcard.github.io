import React, {Component} from 'react';
import { Form, Col, FormGroup, Checkbox } from 'react-bootstrap'
import '../Styles/AddEmployee.css'
import {Link} from 'react-router-dom'

class AddEmployee extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(evt){
        evt.preventDefault();
        const link = evt.target.elements.link.value
        const firstName = evt.target.elements.firstName.value
        const lastName = evt.target.elements.lastName.value
        const country = evt.target.elements.country.value
        const city = evt.target.elements.city.value
        const gender = 'female'
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
            'gender':gender
        }
        if(firstName && lastName ){
            this.props.onAddEmployee(employee)
        }
    }
    render(){
        return(
            <div className='add-employee'>
            <div className='form'>
                <Form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='First Name'name='firstName'/>
                    <input type='text' placeholder='Last Name'name='lastName'/>
                    <label for="gender" id='gender' className='gender-label'>   Gender</label>
                    <select className='select-gender' form='gender'>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
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