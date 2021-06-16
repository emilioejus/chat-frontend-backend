import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const SignIn = ({homeActive})=> {
    // states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setState = [setEmail, setPassword];

    // apis
    const API_REGISTER = 'http://localhost:3001/user/sign-in';

    // funtions
    const handleOnSubmit = event => {
        event.preventDefault();

        const newObj = {
            "email": email,
            "password": password
        }

        fetch(API_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newObj)
        })
        .then(res => res.json())
        .then(data => {
            if(data.isAuthenticated) {
                swal('Login successfully')
                homeActive(data.isAuthenticated)
            }else {
                swal(data.messageError)
            }
        })
        
        setState.forEach(state => state(""))
    }

    const handleOnChange = event => {
        const id = event.target.id;
        const value = event.target.value;
        switch (id) {
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)
                break;    
            default:
                console.error('id does not exist')
                break;
        }
    }

    return (
        <main className="main-sign-up">
            <div className="div-sign-up">
                <center><h1>Login</h1></center>
                <form onSubmit={handleOnSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">Email</label>
                        <input onChange={handleOnChange} type="email" 
                               className="form-control" id="email" placeholder="email@email.com" 
                               value={email} autoComplete="on"/>
                    </div>
                    <div className="mb-5">
                        <label  className="form-label">Password</label>
                        <input onChange={handleOnChange} type="password" 
                               className="form-control" id="password" placeholder="passsword" 
                               value={password} autoComplete="on"/>
                    </div>
                    <div className="mb-4">
                        <button className="btn btn-primary form-control" type="submit">Submit</button>
                    </div>
                    <div className="mb-3">
                        <center>Don't have an acount? <Link to="/register">Sign up</Link></center>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default SignIn;