import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        
            
           <section id="header"className="">
               <div className="container-fluid-nav_bg">
               <div className="row">
               <div className="col-10 mx-auto">
               <div className="col-md-6 pt5 pt-lg-0 order-2 order-lg-1">
            
               <h1>About Us</h1>
               <p>This is a CRUD application.</p>
               <h2 className="my-3"><strong>CRUD?</strong></h2>
               <p>Create,Read,Update,Delete.</p>
               <p>One can store, view,edit delete data using this page.</p>
               <p>Register And know more about this page.</p>
               <div>
  <Link className="btn btn-outline-dark" to="/users/add">REGISTER</Link>
  </div>

               </div>
               </div>
               </div>
               </div>
           </section>
       
    );
};
export default About;