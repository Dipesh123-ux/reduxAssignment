import { combineReducers } from 'redux';

const usersReducer = (state=[],action) =>{
    switch(action.type){
        case 'FETCH_USERS':
            return action.payload
        default:
            return state
    }
}

const userReducer = (state={}, action)=>{
      switch(action.type){
        case 'FETCH_USER':
            return action.payload
        default :
            return state    
      }
     
}

export default combineReducers({
    users : usersReducer,
    user : userReducer
})