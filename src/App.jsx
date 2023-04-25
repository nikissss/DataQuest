import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Login from "./Login";
import Navbar from "./Navbar";
import { Route, Navigate, Routes} from "react-router-dom";

const App = () => {
    return(
        <>
        <Navbar/>
        <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/login" component={Login} />
            <Route path="*" element={<Navigate to ="/"/>}/>
         </Routes>
        </>
    );
};

export default App;