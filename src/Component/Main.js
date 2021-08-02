import React, {Component} from 'react';
import AddEmployee from './AddEmployee.js';
import {Route} from 'react-router-dom';
import axios from 'axios';
import EmployeeDirect from './EmployeeDirect.js'
import Loading from './Loading.js';
import SideBar from './SideBar.js'
import SingleUser from './SingleUser.js'
import NavBar from './NavBar.js'
import BookMarkDirect from './BookMarkDirect.js';


class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            screen: 'loading',
            remove:'',
            employees:[],
            bookmarks:[]
        } 
    }

    componentDidMount(){
        axios.get('https://randomuser.me/api/?results=50&nat=au&seed=abc').then(res => {
          return this.setState({employees:res.data.results})});
          this.startTime()
    }
    startTime = () => {
      this.timer = setInterval(() => {
        this.setState({screen: 'employee'})
       }, 4000);
    }
    componentWillUnmount(){
      clearInterval(this.timer)
    }
  
    removeEmployee = (employeeRemoved) => {
      this.setState((state) => ({
        employees: state.employees.filter(employee => employee !== employeeRemoved)
          }))
        
     }
     AddBookMark = (bookMarkAdded) => {
        this.setState(state => ({
          bookmarks: state.bookmarks.concat(bookMarkAdded)             
        }))
     }

     AddEmployee(postSubmitted){

      this.setState(state => ({
        employees: state.employees.concat(postSubmitted)
      })
      )
    }
    navigate = () => {
      this.setState({remove:'remove'})
    }
    navigateBack = () => {
      this.setState({remove:'default'});
    }

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
        }}/>
 
        )}/>

      <Route exact path='/user/:id' render={(params) => (
        <div>
        <SingleUser   {...params} employees={this.state.employees} onRemoveEmployee={this.removeEmployee} onAddBookMark={this.AddBookMark}/>
        </div>
      )} />

      <Route exact path='/bookmark' render={() => (
        <BookMarkDirect bookmarks={this.state.bookmarks}/>
      )} />
        </div>
      )
    }
  }

  export default Main;


