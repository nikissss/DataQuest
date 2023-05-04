import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/signup", data)
      .then(response => {
        console.log(response.data);
        alert("Signup successful!");
      })
      .catch(error => {
        console.log(error);
        alert("Signup failed.");
      });
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Sign Up your DataQuest Account</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  value={data.fullname}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input 
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={data.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="button">
                Submit
              </button>
            </form>

            <br/>
            <br/>
            <h5 className="text-center">Already have an Account?</h5>
                            <div className="col-12 text-center">
                                <NavLink to="/login" className="button">Log In</NavLink>
                               </div>
            <br/>
            <br/>

          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;


// import React, {useState} from "react";
// import { NavLink } from "react-router-dom";

// const Registration = () => {
//     const [data, setData] = useState({
//         fullname:'',
//         phone:'',
//         email:'',
//         password:'',
//     });
    
//     const InputEvent =(event)=>{
//         const {name, value} = event.target;
//         setData((preVal) =>{
//             return {
//                 ...preVal,
//                 [name] : value,
//             };
//         });
//     };

//     const formSubmit = (e) => {
//         e.preventDefault();
//         alert(`NEW ACCOUNT:
//         FULL NAME:${data.fullname} PHONE NUMBER:${data.phone} EMAIL ADDRESS:${data.email}`)
//     };

//     return (
        
//         <> 
//             <div className="my-5">
//                 <h1 className="text-center"> SignUp your DataQuest Account </h1>
//             </div>
//             <div className="container contact_div">
//                 <div className="row">
//                     <div className="col-md-6 col-10 mx-auto">
//                         <form onSubmit={formSubmit}>
//                                 <div className="mb-3">
//                                     <label for="exampleInputEmail1" className="form-label">
//                                         Full Name
//                                     </label>
//                                     <input 
//                                     type="text" 
//                                     className="form-control" 
//                                     id="exampleInputEmail1" 
//                                     aria-describedby="emailHelp"
//                                     name="fullname"
//                                     value={data.fullname}
//                                     onChange={InputEvent}
//                                     placeholder="Enter your name"
//                                     />
//                                     </div>

//                                     <div className="mb-3">
//                                         <label for="exampleInputEmail1" className="form-label">
//                                             Phone Number
//                                         </label>
//                                         <input 
//                                         type="number" 
//                                         className="form-control" 
//                                         id="exampleInputEmail1" 
//                                         aria-describedby="emailHelp"
//                                         name="phone"
//                                         value={data.phone}
//                                         onChange={InputEvent}
//                                         placeholder="Mobile Number"
//                                         />
//                                          <div id="emailHelp" 
//                                         className="form-text">
//                                             We'll never share your number with anyone else.
//                                     </div>
//                                     </div>

//                                     <div className="mb-3">
//                                         <label for="exampleInputEmail1" className="form-label">
//                                             Email address
//                                         </label>
//                                         <input 
//                                         type="email" 
//                                         className="form-control" 
//                                         id="exampleInputEmail1" 
//                                         aria-describedby="emailHelp"
//                                         name="email"
//                                         value={data.email}
//                                         onChange={InputEvent}
//                                         placeholder="name@example.com"
//                                         />
//                                         <div id="emailHelp" 
//                                         className="form-text">
//                                             We'll never share your email with anyone else.
//                                     </div>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label for="exampleInputPassword1" className="form-label">
//                                         Password
//                                     </label>
//                                     <input 
//                                         name="password"
//                                         value={data.password}
//                                         onChange={InputEvent}
//                                         type="password" 
//                                         className="form-control" 
//                                         id="exampleInputPassword1"
//                                     />
//                                 </div>
//                                 {/* <div className="mb-3 form-check">
//                                     <input type="checkbox" 
//                                     className="form-check-input" 
//                                     id="exampleCheck1"
//                                     />
//                                     <label 
//                                     className="form-check-label" 
//                                     for="exampleCheck1">
//                                         Check me out
//                                     </label>
//                                 </div> */}
//                                 <div className="col-12">
//                                 <button 
//                                 type="submit" 
//                                 className="button">
//                                     Sign Up
//                                 </button>
//                                 </div>
//                         </form>
//                         <h5 className="text-center">Already have an Account?</h5>
//                         <div className="col-12">
//                         <NavLink to="/login" className="button">Log In</NavLink>
//                                 </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Registration;