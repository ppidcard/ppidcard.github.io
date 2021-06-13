import React, {Component} from 'react';
import '../Styles/SingleUser.css'


function SingleUser(props){
    console.log(props)
        const id = props.match.params.id;
        const employees = props.employees;
        console.log(employees[0].id.value)
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
		<button class="primary">
			Bookmark
		</button>
		<button class="primary ghost">
			Remove
		</button>
	</div>

</div>


            </div>
        )
    }

export default SingleUser;