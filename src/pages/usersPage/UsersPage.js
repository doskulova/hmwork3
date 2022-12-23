import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addUserAction, changeInputAction, deleteUserAction} from "../../redux/actions";
import User from "../../components/user/User";

function UsersPage(props) {
    const dispatch=useDispatch()
    const {value, users} =useSelector(state => state.usersReducer)
    const changeInput=(event)=>{
        dispatch(changeInputAction(event.target.value))
    }
    const addUser=()=>{
        dispatch(addUserAction(value))

    }
    const deleteUser=()=>{
        dispatch(deleteUserAction(value))
    }

    return (
        <div>
            <input type="text"
                   value={value}
                   placeholder="name"
                   onChange={changeInput}
            />
            <button  onClick={addUser}>add</button>
            <button  onClick={deleteUser}>delete</button>
            {
                users.length > 0
                ?
                users.map((user,index)=><User key={index} userName={user}/>)
                    :
                    <p>пользователей нет</p>
            }
        </div>
    );
}

export default UsersPage;