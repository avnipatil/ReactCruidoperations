import './login.css';
import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const Login=()=>{
//This is for navigation login success to nxt page 
const navigate = useNavigate()

//Post API Logic for sending Details
    const { register, handleSubmit ,reset} = useForm(); 
    const onSubmit = (data)=> {
        console.log(data)
        axios.post(`https://api-b2b-dashboard.herokuapp.com/user/login`, data )
        .then(res => {
            console.log(res);
            console.log(res.data);
            const datatoken = res.data.token;
            //here set the token in local storage & pass to new page
            localStorage.setItem("user", JSON.stringify(datatoken));
            console.log(datatoken);   
            reset(); 
            if(res.status === 200)
            {
                 navigate('/datatable');
                
            }
        });
    }

    return(
        <>
            <section >
                <div className="container"style={{backgroundColor:'blueviolet',height:'100vh'}}>
                    <div className="row">
                        <form onSubmit={handleSubmit(onSubmit)} className="myform">
                            <h3 style={{color:'white'}}>Sign In</h3>
                            <div className="form-group">
                                {/* <label>Email address</label><br/> */}
                                <input type="text" id="username" {...register("username")}className="form-control" placeholder="Enter username" />
                            </div>
                            <div className="form-group">
                                {/* <label>Password</label><br/> */}
                                <input type="password" id="password" {...register("password")} className="form-control" placeholder="Enter password" />
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1"style={{color:'white'}}>Remember me</label>
                                </div>
                            </div>
                           <Link to="/datatable">
                           <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit(onSubmit)}>Submit</button> 
                           </Link> 
                            <p className="forgot-password"style={{color:'white'}}>
                                Forgot <a href="#"style={{color:'black'}}>password?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>     
    )
}
export default Login;