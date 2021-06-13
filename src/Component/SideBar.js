import React from 'react';
import '../Styles/SideBar.css'
import {Link} from 'react-router-dom'

function sideBar(props){
    return(
        
        <div class="main">

  <div class="sidebar">
    <nav class="nav">
      <ul>
      
   
      <Link className='addIcon'onClick={props.navigateBack} to='/addemployee'><li class="active"><a href="#">Add</a></li></Link>
        <Link className='addIcon' ><li class="active"><a onClick={props.onNavigate} href="#">Remove</a></li></Link>
        <Link className='addIcon' ><li class="active"><a onClick={props.onNavigateBack} href="#">Default</a></li></Link>
      </ul>
    </nav>
  </div>


</div>
    )
}

export default sideBar; 