import React , {useEffect,useState} from 'react'
import { connect } from 'react-redux';
import {fetchUsers,fetchUser} from '../actions'
import '../styles/style.css'
import {LineWave} from 'react-loader-spinner'

const UserList = (props) => {

    useEffect(()=>{
        props.fetchUsers()
    },[])

    
    const showUserList = ()=>{

        if(props.users.length === 0){
           return  <LineWave color="#fff"  ></LineWave>
        }
        else{
        return props.users.map(user=>(
            <button className="mt-2 user-button" onClick={()=>props.fetchUser(user.id)} >{user.id}</button>
        ))
        }
    }
  

  return (
  
    <div className="button-container">
     {showUserList()}
    </div>
  )
}

const mapStateToProps = (state)=>{
    // console.log(state)
    return {
        users : state.users
    }
}

export default connect(mapStateToProps,{fetchUsers,fetchUser})(UserList);