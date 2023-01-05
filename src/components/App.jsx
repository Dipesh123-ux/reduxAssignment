import React from 'react'
import UserList from './userList'
import SingleUser from './singleUser'
import '../styles/style.css'

const App = () => {
  return (
    <>
    <div className="text-center text-white mt-5" >
    <h1 className="" >User Profile - Using Redux</h1>
    </div>

  
    <div className="main container"> 
   


   <div className="col-md-8">
           <SingleUser />
        </div>
        <div className="col-md-4">
            <UserList />
        </div>

        
    
    </div>
    </>
  )
}

export default App