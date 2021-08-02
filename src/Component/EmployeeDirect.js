import React from 'react';

import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import EmployeeCard from './EmployeeCard.js'

function EmployeeDirect(props){

    return(
            <div className="photo-grid">
            {props.employee.map((employee, index) => <EmployeeCard key={index} employee={employee} onRemoveEmployee={props.onRemoveEmployee} removeState={props.removeState}/>)}
            </div>
    )

}

export default EmployeeDirect;

