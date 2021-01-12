import React from 'react'

const Index = () => {
    return (
        <div>
             <label>Filter By:</label> 
                <select className="browser-default" type="text">
                <option value="" diasbled selected>Choose your option</option>
                <option value="Farmer">Gender</option>
                <option value="Buyer">Payment Mode</option>
                <option value="Buyer">Last Login</option>
                </select>
        </div>
    )
}

export default Index
