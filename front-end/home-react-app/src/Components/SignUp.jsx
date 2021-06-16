import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const SignUp = ()=> {
    // states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setStates = [setName, setEmail, setPassword];

    // apis
    const API_REGISTER = 'http://localhost:3001/user/sign-up';

    const handleOnSubmit = event => {
        event.preventDefault();
        const newUser = {
            "name": name,
            "email": email,
            "password": password
        };

        fetch(API_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.isAuthenticated) {
                swal('User created successfully')
            }else {
                swal(data.messageError)
            }
        })
        console.log(newUser)
        
        setStates.forEach(state => state(""))
    }
    
    const handleOnChange = event => {
        let id = event.target.id;
        let value = event.target.value
        switch (id) {
            case "name":
                setName(value)
                break;
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
                <center><h1>Register With Us</h1></center>
                <form onSubmit={handleOnSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">Name</label>
                        <input onChange={handleOnChange} type="text" 
                               className="form-control" id="name" 
                               placeholder="name" value={name} autoComplete="on"/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email</label>
                        <input onChange={handleOnChange} type="email" 
                               className="form-control" id="email" 
                               placeholder="email@email.com" value={email} autoComplete="on"/>
                    </div>
                    <div className="mb-5">
                        <label  className="form-label">Password</label>
                        <input onChange={handleOnChange} type="password" 
                               className="form-control" id="password" 
                               placeholder="passsword" value={password} autoComplete="on"/>
                    </div>
                    <div className="mb-4">
                        <button className="btn btn-primary form-control" type="submit">Submit</button>
                    </div>
                    <div className="mb-3">
                        <center>Already hace an count? <Link to="/login">Login</Link></center>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default SignUp;