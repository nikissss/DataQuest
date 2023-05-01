import React, { useState } from "react";

const Login = () => {
    const [data, setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        password:'',
    });
    
    const InputEvent =(event)=>{
        const {name, value} = event.target;
        setData((preVal) =>{
            return {
                ...preVal,
                [name] : value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`NEW ACCOUNT:
        FULL NAME:${data.fullname} PHONE NUMBER:${data.phone} EMAIL ADDRESS:${data.email}`)
    };
/*form pachi onSubmit={formSubmit}*/
return(
        <> 
            <div className="my-5">
                <h1 className="text-center"> SignUp your DataQuest Account </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">
                                        Full Name
                                    </label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter your name"
                                    />
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">
                                            Phone Number
                                        </label>
                                        <input 
                                        type="number" 
                                        className="form-control" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp"
                                        name="phone"
                                        value={data.phone}
                                        onChange={InputEvent}
                                        placeholder="Mobile Number"
                                        />
                                         <div id="emailHelp" 
                                        className="form-text">
                                            We'll never share your number with anyone else.
                                    </div>
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">
                                            Email address
                                        </label>
                                        <input 
                                        type="email" 
                                        className="form-control" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp"
                                        name="email"
                                        value={data.email}
                                        onChange={InputEvent}
                                        placeholder="name@example.com"
                                        />
                                        <div id="emailHelp" 
                                        className="form-text">
                                            We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">
                                        Password
                                    </label>
                                    <input 
                                        name="password"
                                        value={data.password}
                                        onChange={InputEvent}
                                        type="password" 
                                        className="form-control" 
                                        id="exampleInputPassword1"
                                    />
                                </div>
                                {/* <div className="mb-3 form-check">
                                    <input type="checkbox" 
                                    className="form-check-input" 
                                    id="exampleCheck1"
                                    />
                                    <label 
                                    className="form-check-label" 
                                    for="exampleCheck1">
                                        Check me out
                                    </label>
                                </div> */}
                                <div className="col-12">
                                <button 
                                type="submit" 
                                className="btn btn-outline-primary">
                                    Sign Up
                                </button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;