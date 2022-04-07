import './AddData.css';
import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddData=()=>{
//This is for navigation login succss to nxt page 
const navigate = useNavigate()

//Post API Logic for sending Details
    const { register, handleSubmit ,reset} = useForm(); 
    const onSubmit = (data)=> {
        console.log(data)
        axios.post(`https://api-b2b-dashboard.herokuapp.com/contact`, data )
        .then(res => {
            console.log(res);
            console.log(res.data);   
            reset(); 
            navigate('/datatable');         
        });
    }

    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <form onSubmit={handleSubmit(onSubmit)} className="myform">
                            <h3>Add Your Data Here..</h3>
                            <div className="form-group">
                                <label>Enter Name</label><br/>
                                <input type="text" id="name"  {...register("userId")} className="form-control" placeholder="Enter Username" />
                            </div>
                            <div className="form-group">
                                <label>Enter Name</label><br/>
                                <input type="text" id="name" {...register("name")} className="form-control" placeholder="Enter Username" />
                            </div>
                            <div className="form-group">
                                <label>Email address</label><br/>
                                <input type="email" id="email" {...register("email")}className="form-control" placeholder="Enter Email" />
                            </div>    
                            <div className="form-group">
                                <label>phone Number</label><br/>
                                <input type="number" id="phone" {...register("phone")}className="form-control" placeholder="Enter Phone" />
                            </div>
                            <div className="form-group">
                                <label>Your Message</label><br/>
                                <input type="text" id="message" {...register("message")}className="form-control" placeholder="Enter message" />
                            </div>     
                            <div className="form-group">
                                <label>Your subject</label><br/>
                                <input type="text" id="subject" {...register("subject")}className="form-control" placeholder="Enter subject" />
                            </div>                
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>
                            <Link to="/datatable">
                                 <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit(onSubmit)}>Save</button> 
                            </Link>                        
                            <p className="forgot-password">
                                Forgot <a href="#">password?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>     
    )
}
export default AddData;