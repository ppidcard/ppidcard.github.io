import React from 'react'
import {Link} from 'react-router-dom'

function EmployeeCard(props){
    const perEm = props.employee;
  
     return(
         <div>
                         {props.removeState === 'remove' && <button className='remove-button' onClick={() =>{
                props.onRemoveEmployee(perEm);
            }}>&#10006;</button>}
         <figure className='figure'>
            <Link to={`/user/${perEm.id.value}`}><img className='employee-photo' src={perEm.picture.large} alt={perEm.name.last} /></Link>
             
            
             <figcaption><p className='employee-text'><b>{perEm.name.first[0]}</b>{(perEm.name.first.slice(1,(perEm.name.first.length)))} <b>{perEm.name.last[0]}</b>{perEm.name.last.slice(1, (perEm.name.last.length))}</p></figcaption>
             {perEm.gender === 'female'? (<p className='employee-text gender-pronoun'>She/Her</p>) : <p className='employee-text gender-pronoun'>He/Him</p>}
            <div className='button-container'>
 
            </div>
             </figure>
             </div>
     )
}



export default EmployeeCard;


// function Photo (props){
//     const post = props.post
//     return (
//     <figure className='figure'>
//         <img className='photo'src={post.imageLink} alt={post.description} />
//         <figcaption><p>{post.description}</p></figcaption>
//         <div className='button-container'>
//             <button className='remove-button' onClick={() =>{
//                 props.onRemovePhoto(post);
//             }}>Remove</button>
//         </div>
//         </figure>
//     )
// }