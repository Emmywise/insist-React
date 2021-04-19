import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

function Register () {
    const  history = useHistory()


    const [formData, setFormData] = useState({username:"", password: "", email: ""})
 
    const handleRegister = event => {


        console.log('this.state.credentials');
        fetch('http://127.0.0.1:80/api/user-register/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }).then(response =>{

            if(response.ok){
                console.log(response.json())
        history.push("/login")
            } else {
                throw new Error("Sonemthing went wrong")
            }
            
        }).catch(error => {console.error(error)
        })
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
                <h1>Register user form</h1>
                <label>
                    Email:
                    <input type="email" name="email" 
                     value={formData.email}
                    onChange={inputChanged} name="email"/>
                    
                </label>
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
                <button onClick={handleRegister}>Register</button>
            
               
                <button><Link to="/login">Already registered? Go to Login!</Link></button>
            </header>
            </div>
        );
        
}

export default Register;
