import React, {Component} from 'react';
import '../Styles/SingleUser.css'
import {Link} from 'react-router-dom'


function SingleUser(props){
 



        const id = props.match.params.id;
        const employees = props.employees;
 
        const single = employees.find((employee) => employee.id.value == id)

        return(
            <div className='single-employee'>
     <div class="card-container">

	<img class="round" src={single.picture.large} alt="user" />
    
	<h2 className='employee-intro'>{single.name.first} {single.name.last}</h2>
	<h3 className='employee-intro'>{single.location.city},  {single.location.country}</h3>
	<p className='employee-intro'>{single.email}</p>
    <p className='employee-intro'>{single.phone}</p>



        <div class="buttons">
		<Link to='/bookmark'><button class="primary" onClick={() => {
            props.onAddBookMark(single);
         
        }}>
			Bookmark
		</button></Link>
		<Link to='/'><button class="primary ghost" onClick={(() => {
            props.onRemoveEmployee(single);
            
        })}>
			Remove
		</button></Link>
	</div>

</div>


            </div>
        )
    }

export default SingleUser;