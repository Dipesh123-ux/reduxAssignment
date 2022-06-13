
export const fetchUsers = () => async dispatch => {
    const response = await fetch('https://reqres.in/api/users');
    const result = await response.json()

    dispatch({type : 'FETCH_USERS',payload : result.data})
}

export const fetchUser = (id) => async dispatch =>{
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const result = await response.json()
    dispatch({type : 'FETCH_USER',payload : result.data})
}

