import './Datatable..css';
import React, {useState,useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Datatable=()=>{
 const [items, setItems] = useState([]);

//here get the token from local storage & pass that variable into api
const tok =  JSON.parse(localStorage.getItem("user"));

//GET/FETCH API Logic for Aceesing data/Details using Token 
useEffect(()=> {
    axios.get(`https://api-b2b-dashboard.herokuapp.com/contact`, { headers: {"Authorization" : `Bearer ${tok}`} })
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

// Delete the records API
const deleteRecord = (id) =>
{
  axios.delete(`https://api-b2b-dashboard.herokuapp.com/contact/${id}`, { headers: {"Authorization" : `Bearer ${tok}`} } )
  .then((result)=>{
    loadEmployeeDetail();
    alert(' Code');
  })
  .catch(()=>{
    alert('Sure,You delete the record');
  });
};


    return(
        <>
            <section>

            <h2>Form Data Table</h2>
                <div className="container">
                    <div className="row">
            <div><Link to="/adddata"><button type="submit" className="btn btn-success btn-block"><i class="fas fa-plus"></i></button></Link></div>

                    <table className="table table-striped">
                        <thead>
                        <tr>
                        <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>phone</th>
                            <th>message</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                            <th>VIEW</th>
                        </tr>
                        </thead>
                        {
              items.map((item, i) => {
                return (
                        <tbody>
                        <tr key={i}>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.message}</td> 
                           <td><Link to={'/updatedata/'+item._id}><button  type="submit" className="btn btn-primary btn-block"><i class="fas fa-pencil-alt"></i></button></Link></td>     
                           <td><button onClick={() => deleteRecord(item._id)} type="submit" className="btn btn-danger btn-block"><i class="fas fa-trash"></i></button></td>
                           <td><Link to="/viewbtn"><button  type="submit" className="btn btn-warning btn-block"><i class="fas fa-eye"></i></button></Link></td>
                        </tr>                       
                       </tbody>                                          
                            )
                        })
                      }
                    </table>                      
                    </div>
                </div>
            </section>
        </>     
    )
}
export default Datatable;