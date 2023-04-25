import React, { useState } from "react";

const Login = () => {
    const [data, setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        password:'',
    });
/*form pachi onSubmit={formSubmit}*/
return(
        <> 
            <div className="my-5">
                <h1 className="text-center"> Login to your account </h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form >
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">
                                        Full Name
                                    </label>
                                    <input 
                                    type="email" 
                                    className="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp"
                                    name="fullname"
                                    value={data.fullname}
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
                                <button 
                                type="submit" 
                                className="btn btn-outline-primary">
                                    Submit
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;