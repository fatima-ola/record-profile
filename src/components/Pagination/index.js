import React from 'react';

const Index = (props) => {
    const {postsPerPage, totalPosts,paginate } = props
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }
    return (    
        <ul className="pagination">
            {pageNumbers.map((number)=>{
                return(
                <li classname="listed-page" key={number}>
                <a href="#!" onClick={() => paginate(number)}>{number}</a>
                </li>
                )
            })}
        </ul>  
    )
}

export default Index