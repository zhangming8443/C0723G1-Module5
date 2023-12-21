import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route, Link} from "react-router-dom";
import React from "react";

import Main from "./components/Main"
import ES6Component from "./components/ss1/ES6Component";
import StudentListComponent from "./components/ss2/StudentListComponent";
import SignInComponent from "./components/ss2/SignInComponent";
import StudentInfoComponent from "./components/ss3/StudentInfoComponent";
import ToDoAppComponent from "./components/ss3/ToDoAppComponent";
import Counter1 from "./components/ss4/Counter1Component";
import Counter2 from "./components/ss4/Counter2Component";
import SignUpForm from "./components/ss5/practice/sign-up-form/SignUpForm";
import ValidateSignUp from "./components/ss5/practice/validate-sign-up/ValidateSignUp";
import ValidateFormLogin from "./components/ss5/practice/validate-login/ValidateFormLogin";
import ValidateFormLoginFormik from "./components/ss5/practice/login-formik/ValidateFormLoginFormik";
import Home from "./components/ss5/practice/router1/Home";
import About from "./components/ss5/practice/router1/About";
import Contact from "./components/ss5/practice/router1/Contact";
import Router1 from "./components/ss5/practice/router1/Router1";
import Category from "./components/ss5/practice/router2/Category";
import Product from "./components/ss5/practice/router2/Product";
import ContactForm from "./components/ss5/exercise/contact-form/ContactForm";


function App() {
    return (
        <div>
            <Main/>
            <hr/>
            <Routes>
                <Route path="/exercise-1" element={<ES6Component/>}/>
                <Route path="/exercise-2.1" element={<StudentListComponent/>}/>
                <Route path="/exercise-2.2" element={<SignInComponent/>}/>
                <Route path="/exercise-3.1" element={<StudentInfoComponent/>}/>
                <Route path="/exercise-3.2" element={<ToDoAppComponent/>}/>
                <Route path="/exercise-4" element={
                    <>
                        <Counter1/>
                        <Counter2/>
                    </>
                }/>
                <Route path="/practice-5.1" element={<SignUpForm/>}/>
                <Route path="/practice-5.2" element={<ValidateSignUp/>}/>
                <Route path="/practice-5.3" element={<ValidateFormLogin/>}/>
                <Route path="/practice-5.4" element={<ValidateFormLoginFormik/>}/>
                <Route path="/practice-5.5" element={<Router1/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/practice-5.6" element={<Category/>}/>
                <Route path="/product/:categoryId" element={<Product/>}/>
                <Route path="/exercise-5.1" element={<ContactForm/>}/>
            </Routes>

        </div>
    );
}

export default App;
