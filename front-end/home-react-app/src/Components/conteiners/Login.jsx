import React from 'react'
import SignIn from '../SignIn';

const Login = ({homeActive}) => {
    // error home
    const homeError = ()=> {};
    return (
        <div>
        <SignIn homeActive={homeActive|| homeError}/>
       </div>
    )
};

export default Login;