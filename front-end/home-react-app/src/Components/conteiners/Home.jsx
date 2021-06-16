import React, {useEffect, useState} from 'react';

const Home= ({homeActive})=> {
    // states
    const [name, setName] = useState(true);
    
    homeActive(name)

    // apis
    const API_HOME = 'http://localhost:3001/user/name';

    useEffect(()=> {

        fetch(API_HOME, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setName(true))
        .catch(error => console.error(error))
    },[])

    return (
        <>
            <h1>Hello {name}</h1>
            <h3>It is authenticated</h3>
        </>
    );
}

export default Home;