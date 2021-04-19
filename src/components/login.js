import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

function Login () {
    const  history = useHistory()


    const [formData, setFormData] = useState({username:"", password: ""})
    
    

 
    const handleLogin = event => {
       

        console.log('this.state.credentials');
        fetch('http://127.0.0.1:80/api/user-login/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }).then(response =>{

            if(response.ok){
                console.log(response.json())
        history.push("/dashboard")
            } else {
                throw new Error("Sonemthing went wrong")
            }
            
        }).catch(error => {console.error(error)
        history.push("/register")})
    }
    const inputChanged = (event) => {
        const innerName = event.target.name
        const innerValue = event.target.value
        setFormData(prev => {
            return {...prev, [innerName]: innerValue}
        })
    }



      
        return (
            <div className="App">
            <header className="App-header">
                <h1>Login user form</h1>
                <label>
                    username:
                    <input type="text" name="username" 
                     value={formData.username}
                    onChange={inputChanged} name="username"/>
                    
                </label>
                <br/>
                <label>
                    password:
                    <input type="password" name="password"
                    value={formData.password}
                    onChange={inputChanged} name="password"/>
                </label>
                <br/>
                <button onClick={handleLogin}>Login</button>
              
               
                <button><Link to="/register">Signup if no login!</Link></button>
            </header>
            </div>
        );
        
}

export default Login;
