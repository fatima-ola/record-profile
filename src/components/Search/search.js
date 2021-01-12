import React, {useState} from 'react'
import PropTypes from 'prop-types';


const Search =({searchUsers, resetUsers, showClear, setAlert})=> {
    const [text, setText] = useState('');
    
     Search.propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    };

    const handleChange =(e) =>{
        const {name, value} = e.currentTarget;
       if(name === "text"){
            setText(value);
        }
    };
    console.log("setText",text);


   const handleSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert(
              'You have to type something to search users...',
              'danger'
            );
          } else {
            searchUsers(text);
            setText('');
          }
    }

   
    return (
        <div>
            <div className="searchbox">
                <form onSubmit={handleSubmit}>
                    <label>Search:</label> 
                    <input  type="text" placeholder="Find a user" id="search1" name="text" value={text} onChange={handleChange} className="search browser-default" />
                    <input type='submit' value='search' className='btn btn-dark btn-block'/>
                </form>
            </div>
            {showClear && (
                <button
                className='btn btn-danger btn-block'
                onClick={resetUsers}
                >
                Click to View All Users
                </button>
                )}
        </div>
    )
}

export default Search