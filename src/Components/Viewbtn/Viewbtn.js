import './Viewbtn.css';
import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
 const Viewbtn =()=>{
     return(
         <>
         <section>
             <div className="container">
                 <div className="row">
                 <form  className="myform">
                            <h3 style={{color:'white'}}>Sign In</h3>
                            <div className="form-group">
                                {/* <label>Email address</label><br/> */}
                                <input type="text" id="username" className="form-control" placeholder="Enter username" />
                            </div>
                            <div className="form-group">
                                {/* <label>Password</label><br/> */}
                                <input type="password" id="password"  className="form-control" placeholder="Enter password" />
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1"style={{color:'white'}}>Remember me</label>
                                </div>
                            </div>
                           <Link to="/datatable">
                           <button type="submit" className="btn btn-primary btn-block">Submit</button> 
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
 export default Viewbtn;