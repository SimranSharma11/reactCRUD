import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './component/pages/home';
import About from './component/pages/about';
import Contact from './component/pages/contact';
import Navbar from './component/layout/navbar';
import { BrowserRouter as  Router , Route , Routes } from "react-router-dom";
import  NotFound  from './component/pages/NotFound';
import AddUser from './component/users/AddUser';
import EditUser from './component/users/EditUser';
import User from './component/users/user';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/users/add" element={<AddUser/>}/>
      <Route exact path="/users/edit/:id" element={<EditUser/>}/>
      <Route exact path="/users/:id" element={<User/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    </div>
    </Router>
  );
};

export default App; 