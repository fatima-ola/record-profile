import React, {useState, useEffect} from 'react'
import Search from './../Search/index';
import Select from './../Select/index';
import Users from './../Users/index';
import Pagination from './../Pagination/index';



const Index = () => {

    const [userProfiles, setUserProfiles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20)

    const recordApi = "http://api.enye.tech/v1/challenge/records";


    useEffect(()=>{
        const fetchApi = async () =>{
            const data = await fetch(recordApi);
            const response = await data.json();
            const responseArray = response.records.profiles;
            setUserProfiles(responseArray);
            console.log("response",responseArray)
        } 
        fetchApi()

    }, [])

     //Get current posts
     const indexOfLastPost = currentPage * postsPerPage;
     const indexOfFirstPost = indexOfLastPost - postsPerPage;
     const currentPosts = userProfiles.slice(indexOfFirstPost, indexOfLastPost);
 
     // Change page
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   
    return (
        <div className="main" >
             <nav>
                <ul>
                    <li><h2>All Users Profile:</h2></li>
                    <li><h2>Search<Search /></h2></li>
                    <li><h2>Filter <Select /></h2></li>
                </ul>
            </nav>
            <hr />
           <div className="content-container">
                <div>
                    <Users userProfiles={currentPosts}/>
                </div>
                <Pagination postsPerPage={postsPerPage} totalPosts={userProfiles.length} paginate={paginate}/>
           </div>
           
        </div>
    )
}

export default Index
