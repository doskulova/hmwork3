import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {changeTitleAction, withParamsAction} from "../../redux/actions";

function MainPage() {
    const dispatch= useDispatch()
    const title = useSelector(state => state.titleReducer.title)
    const changeInput=()=>{
        dispatch(changeTitleAction())
    }
    const withParams = ()=>{
      dispatch(withParamsAction("hell "))
    }


    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeInput}>change title</button>
            <button onClick={withParams}>with params</button>
        </div>
    );
}

export default MainPage;