import React from 'react'
import UserList from './userList'
import SingleUser from './singleUser'
import '../styles/style.css'

const App = () => {
  return (
    <>
    <div style={{marginTop:"30px",color:"white",textShadow:"0 0 15px rgba(255,255,255)"}} className="text-center" >
    <h2 className="" >User Profile - Using Redux</h2>
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