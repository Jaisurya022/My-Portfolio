import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Home/Navbar";
import Home from "./pages/Home/Homescreen";
import "./App.css";



function App() {
     
       return (
          
        <>
         
         <Router>
              
                     <Navbar />
                     <Routes>
             
                    <Route path="/" element={<Home />}></Route>

                    <Route path="*" element={<div>404 Not Found</div>}></Route>
                     </Routes>
              
         </Router>

         </>
 

       );



}

export default App;
