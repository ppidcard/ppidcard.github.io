import React from 'react';
import BookMarkDirect from './BookMarkDirect';
import {Link} from 'react-router-dom'
import '../Styles/BookMark.css';


function BookMark(props){
    const perEm = props.bookmark;
  
     return(
         
                        
         <figure>
            <Link to={`/user/${perEm.id.value}`}><img  src={perEm.picture.large} alt={perEm.name.last} /></Link>
             
            
             <figcaption><p ><b>{perEm.name.first[0]}</b>{(perEm.name.first.slice(1,(perEm.name.first.length)))} <b>{perEm.name.last[0]}</b>{perEm.name.last.slice(1, (perEm.name.last.length))}</p></figcaption>
            
            <div className='button-container'>
 
            </div>
             </figure>
             
     )


}

//         const id = props.match.params.id;
//         const employees = props.employees;
 
//         const single = employees.find((employee) => employee.id.value == id)

//         return(
//             <div className='single-employee'>
//      <div class="card-container">

// 	<img class="round" src={single.picture.large} alt="user" />
    
// 	<h2 className='employee-intro'>{single.name.first} {single.name.last}</h2>
// 	<h3 className='employee-intro'>{single.location.city},  {single.location.country}</h3>
// 	<p className='employee-intro'>{single.email}</p>
//     <p className='employee-intro'>{single.phone}</p>



//         <div class="buttons">
// 		<button class="primary" onClick={() => {
//             props.onAddBookMark(single);
         
//         }}>
// 			Bookmark
// 		</button>
// 		<Link to='/'><button class="primary ghost" onClick={(() => {
//             props.onRemoveEmployee(single);
            
//         })}>
// 			Remove
// 		</button></Link>
// 	</div>

// </div>


//             </div>
//         )
//     }

export default BookMark;