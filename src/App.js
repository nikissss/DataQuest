import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Login from "./Login";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Template from "./Template";
import Template2 from "./Template2";
import Template3 from "./Template3";
import DragDrop from "./DragDrop";
import { Route, Navigate, Routes} from "react-router-dom";
import Registration from "./Registration";

const App = () => {
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/service" Component={Service} />
            <Route path="/login" Component={Login} />
            <Route path="/registration" Component={Registration} />
            <Route path="*" element={<Navigate to ="/"/>}/>
            <Route exact path="/template" Component={Template}/>
            <Route exact path="/template2" Component={Template2}/>
            <Route exact path="/template3" Component={Template3}/>
            <Route exact path="/dragdrop" Component={DragDrop}/>
         </Routes>
        <Footer/>
        </>
    );
};

export default App;


/*import logo from './logo.svg';
import './App.css';
// import './App.jsx';

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
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/service" Component={Service} />
            <Route path="/login" Component={Login} />
            <Route path="*" element={<Navigate to ="/"/>}/>
         </Routes>
        </>
    );
};

export default App;
*/



//yo chaidaina holaaaaa
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

// export default App;