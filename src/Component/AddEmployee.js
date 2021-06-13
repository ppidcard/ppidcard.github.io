import React, {Component} from 'react';
import { Form, Col, FormGroup, Checkbox } from 'react-bootstrap'
import '../Styles/AddEmployee.css'

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
        const gender = evt.target.elements.gender.value
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
            <div>

            <div className='form'>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                    <Col>
                    <Form.Control type='text' placeholder='First Name'name='firstName'/>
                    </Col>
                    <Col>
                    <Form.Control type='text' placeholder='Last Name'name='lastName'/>
                    </Col>
                    </Form.Row>
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
                    <button className='form-button'>Add</button>
                </Form>
            </div>
            </div>
        )
    }
}

export default AddEmployee;