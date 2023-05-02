import React, { useState } from "react";

const Login = () => {
    const [data, setData] = useState({
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
//         alert(`NEW ACCOUNT:
// EMAIL ADDRESS:${data.email}`)
    };
/*form pachi onSubmit={formSubmit}*/
return(
        <> 
            <div className="my-5">
                <h1 className="text-center"> Log In to your DataQuest Account </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
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
                                        required
                                        />
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
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                <button 
                                type="submit" 
                                className="button">
                                    Log In
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