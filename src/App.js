
import React  from 'react';
import './App.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Login from './Components/Login/Login';
import Datatable from './Components/Datatable/Datatable';
import AddData from './Components/AddData/AddData';
import Updatedata from './Components/Updatedata/Updatedata';
import Viewbtn from './Components/Viewbtn/Viewbtn';
import Header from './Components/Header/Header';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/datatable' element={<Datatable/>}/>
            <Route path='/adddata' element={<AddData/>}/>
            <Route path='/updatedata/:id' element={<Updatedata/>}/>
            <Route path='/viewbtn' element={<Viewbtn/>}/>
            <Route path='/header' element={<Header/>}/>

        </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
