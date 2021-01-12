import React, {useState} from 'react'
import Search from './../Search/search';
import Select from './../Select/index';
import Users from './../Users/index';
import Pagination from './../Pagination/index';
import Alert from './../Alert/index';




const Index = () => {

    const [userProfiles, setUserProfiles] = useState([]);
    const [alert, setAlert] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20)

    const recordApi = "http://api.enye.tech/v1/challenge/records";


    // useEffect(()=>{
    //     const fetchApi = async () =>{
    //         const data = await fetch(recordApi);
    //         const response = await data.json();
    //         const responseArray = response.records.profiles;
    //         setUserProfiles(responseArray);
    //         console.log("response",responseArray)
    //     } 
    //     fetchApi()

    // }, [])

     //Get current posts
     const indexOfLastPost = currentPage * postsPerPage;
     const indexOfFirstPost = indexOfLastPost - postsPerPage;
     const currentPosts = userProfiles.slice(indexOfFirstPost, indexOfLastPost);
 
     // Change page
   const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const searchUsers = async () => {
        setLoading({ loading: true });
        const data = await fetch(recordApi);
        const response = await data.json();
        const responseArray = response.records.profiles;
        setUserProfiles(responseArray);
        // console.log("response",responseArray)
        // setUserProfiles(responseArray);
        setLoading(false);
    };

    //clear users from state
    const clearUsers = () => {
        setUserProfiles([]);
        setLoading(false);
    }

    //setAlert
    const setMsg = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
    };

   
    return (
        <div className="main" >
             <nav>
                <ul>
                    <li><h2>All Users Profile</h2></li>
                    <li> <Alert alert={alert} />
                    <h2><Search 
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={userProfiles.length > 0 ? true : false}
                    setAlert={setMsg}
                    /></h2></li>
                    <li><h2><Select /></h2></li>
                </ul>
            </nav>
            <hr />
           <div className="content-container">
                <div>
                    <Users userProfiles={currentPosts} loading={loading} users={userProfiles} />
                </div>
           </div>
           <Pagination postsPerPage={postsPerPage} totalPosts={userProfiles.length} paginate={paginate}/>
        </div>
    )
}

export default Index
