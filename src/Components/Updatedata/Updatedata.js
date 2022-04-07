import './Updatedata.css';
import React, { Component, useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const Updatedata=()=>{

const { reset} = useForm();
const navigate = useNavigate()
const { id } = useParams();
let tok = JSON.parse(localStorage.getItem('token'));
//GET/FETCH API Logic for Aceesing data/Details using Token 
const [items, setItems] = useState([]);

useEffect(()=> {
    axios.get(`https://api-b2b-dashboard.herokuapp.com/contact${id}`, { headers: {"Authorization" : `Bearer ${tok}`} })
    .then(res => {
        console.log(res);
        console.log(res.data);
        setItems(res.data);
        console.log(items);
    })
    .catch(err =>{
        console.log(err)
    })
}, [])
 //Update API Logic
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[message,setMessage]=useState('');
    const[subject,setSubject]=useState('');

    const onUpdate = (e)=> {
        e.preventDefault();  
      const user={
          "name":name,
          "email":email,
          "phone":phone,
          "message":message,
          "subject":subject
        }
    axios.patch(`https://api-b2b-dashboard.herokuapp.com/contact/${id}`,user,{ headers: {"Authorization" : `Bearer ${tok}`}})
     .then(res => {
         console.log(res);
         console.log(res.data.id);
        //  setItems(res.data);
         console.log(items);
         Swal.fire({
            position: 'centerd',
            icon: 'success',
            title: 'Your Data has been Updated...',
            showConfirmButton: false,
            timer: 2000
        })
         reset();
         navigate('/datatable');
     })
     }       

    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <form  onSubmit={onUpdate} className="myform">
                            <h3>Update Your Data</h3>
                            <div className="form-group">
                                <label>Enter Name</label><br/>
                                <input type="text" defaultValue={items.name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Username" />
                            </div>
                            <div className="form-group">
                                <label>Email address</label><br/>
                                <input type="email" defaultValue={items.email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter Email" />
                            </div>    
                             <div className="form-group">
                                <label>phone Number</label><br/>
                                <input type="number"  defaultValue={items.phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter Phone" />
                            </div>
                            <div className="form-group">
                                <label>Your Message</label><br/>
                                <input type="text" defaultValue={items.message} onChange={(e) => setMessage(e.target.value)} className="form-control" placeholder="Enter message" />
                            </div>       
                            <div className="form-group">
                                <label>Your subject</label><br/>
                                <input type="text"  defaultValue={items.subject} onChange={(e) => setSubject(e.target.value)} className="form-control" placeholder="Enter subject" />
                            </div>               
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" className="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>
                                 <button type="submit" className="btn btn-primary btn-block" onClick={()=>onUpdate}>Update</button> 
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
export default Updatedata;