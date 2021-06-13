import React, {Component} from 'react';


import AddEmployee from './AddEmployee.js';
import SearchBar from './SearchBar'
import {Route} from 'react-router-dom';

import axios from 'axios';
import EmployeeDirect from './EmployeeDirect.js'
import Loading from './Loading.js';
import SideBar from './SideBar.js'
import SingleUser from './SingleUser.js'
import NavBar from './NavBar.js'


class Main extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            
            screen: 'loading',
            remove:'',
            employees:[]
        }

        this.removeEmployee = this.removeEmployee.bind(this)
        this.navigate = this.navigate.bind(this)
        this.updateState = this.updateState.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentWillUnmount = this.componentWillUnmount.bind(this)
        this.navigateBack = this.navigateBack.bind(this)


    }

    componentDidMount(){
      axios.get('https://randomuser.me/api/?results=50&nat=au&seed=abc').then(res => {
        return this.setState({employees:res.data.results})});
       this.timer = setInterval(this.updateState, 4000);
     
    }
    componentWillUnmount(){
      clearInterval(this.timer)
    }
  

  updateState(){
    this.setState({screen: 'employee'});

  }




    removeEmployee(employeeRemoved){

      this.setState((state) => ({
        employees: state.employees.filter(employee => employee !== employeeRemoved)
          }))
     }

     AddEmployee(postSubmitted){

      this.setState(state => ({
        employees: state.employees.concat(postSubmitted)
      
      })
      )

    }

    navigate(){
      this.setState({remove:'remove'})
    }

    navigateBack(){
      this.setState({remove:'default'});
      console.log(this.state.remove)
    }



    // componentDidMount(){
    //   const data = StimulareFetchFromDataBase();
    //   this.setState({posts: data});
    // }
    render(){
      
      return(
        <div>

          <Route exact path='/' render = {() => (
          <div>

            {this.state.screen === 'employee' ? <div>
          <NavBar onNavigateBack={this.navigateBack} />
          <SideBar onNavigate={this.navigate} onNavigateBack={this.navigateBack} />
          <EmployeeDirect removeState={this.state.remove} employee={this.state.employees} onRemoveEmployee={this.removeEmployee} /></div> : <Loading />}
          </div>
          )} />


        <Route exact path='/addemployee'  render = {({history}) => (
          
         <AddEmployee onAddEmployee={(addedPost) => {
          this.AddEmployee(addedPost);
       
          history.push('./');
          // let history = useHistory();
          // history.push('/');
        }}/>
 
        )}/>

      <Route exact path='/user/:id' render={(params) => (
        <SingleUser   {...params} employees={this.state.employees}/>
      )} />
      
        </div>
      )
    }
  }

  export default Main;


