import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term:''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(evt){
        this.setState({term:evt.target.value});
    }
    onFormSubmit(evt){
        evt.preventDefault();
        this.props.onTermSubmit(this.state.term);
    };
    render(){
        return(
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Employee Search</label>
                        <input type='text' value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;