import React, {useState } from 'react';
import  { Redirect }  from "react-router-dom";
import './Register.css';
import SignIn from './SignIn';


const Register = () =>{
    const [data, setData] = useState({
        email:"",
        username:"",
        name:"",
        password:"",
        cel:""
    });

    const onChange = ({target}) =>{
        setData((state) => {
            return { ...state, [target.id]: target.value}
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(SignIn(data)){
            window.alert("Usuario registrado con exito");
        }else{
            window.alert("Error al registrar");
        }
            
    }
    
        return (
            <div className="app">
                <div className="wrapper fadeInDown">
                <div className = "header2"><h4>Create a new account!</h4></div>
                    <div id="formContent">
                        <div className="fadeIn first">
                            <form onSubmit={onSubmit}>
                                <label>Your e-mail</label><br></br>
                                <input type="text" id="email" placeholder="E-mail" onChange={onChange} value={data.email}></input><br></br>
                                <label>Create a new Username</label><br></br>
                                <input type="text" id="username" placeholder="Username" onChange={onChange} value={data.username}></input><br></br>
                                <label>Name</label><br></br>
                                <input type="text" id="name" placeholder="Ej. John Doe" onChange={onChange} value={data.name}></input><br></br>
                                <label>Insert your password</label><br></br>
                                <input type="password" id="password" placeholder="**********" onChange={onChange} value={data.password}></input><br></br>
                                <label>Cellphone number</label><br></br>
                                <input type="text" id="cel" placeholder="1800-Table-Office" onChange={onChange} value={data.cel}></input><br></br>
                                <input type="submit" className="fadeIn fourth" value="Registrar" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Register;