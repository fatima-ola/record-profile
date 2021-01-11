import React from 'react';


const Index = (props) => {
    const {userProfiles} = props
   
    return (
        <div style={userStyle}>
            {userProfiles.map((userProfile)=>{
               return(
                   <div className="card" key={userProfile.UserName}>    
                       <div className="users">
                            <h5>Full Name:</h5> 
                            <p><span className="name">{userProfile.FirstName}</span><span>{userProfile.LastName}</span></p>
                       </div>
                       <div className="users">
                            <h5>Username:</h5> 
                            <p>{userProfile.UserName}</p>
                       </div>
                       <div className="users">
                            <h5>Phone Number:</h5>
                            <p>{userProfile.PhoneNumber}</p>
                       </div>
                       <div className="users">    
                            <h5>Gender:</h5>
                            <p>{userProfile.Gender}</p>  
                       </div>
                       <div className="users">
                            <h5>Email Address:</h5>
                            <p> {userProfile.Email}</p>
                       </div>
                        <div>
                            <a href="#more" className='btn btn-dark btn-sm my-1'>
                            More Info
                            </a>
                        </div>
                   </div>
                   
               )              
            })}
        </div>
    )
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
  };

export default Index
