import React,  { Component }  from 'react'
import PropTypes from 'prop-types';


class Search extends Component {
    state = {
      text: '',
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

      onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
          this.props.setAlert(
            'You have to type something to search users...',
            'danger'
          );
        } else {
          this.props.searchUsers(this.state.text);
          this.setState({ text: '' });
        }
      };

    
    
   render(){
    return (
        <div>
            <div className="searchbox">
                <form onSubmit={this.onSubmit}>
                    <label>Search:</label> 
                    <input  type="text" placeholder="Find a user" id="search1" name="text" value={this.state.text} onChange={this.onChange} className="search browser-default" />
                    <input type='submit' value='search' className='btn btn-dark btn-block'/>
                </form>
                {this.props.showClear && (
                <button
                className='btn btn-light btn-block'
                onClick={this.props.clearUsers}
                >
                Clear
                </button>
                )}
            </div>
        </div>
    )
   }
}

export default Search
