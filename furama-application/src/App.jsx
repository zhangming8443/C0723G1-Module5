import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Home from './components/home-page/Home';
import './App.css'
import Room from "./components/room/Room";
import Customer from "./components/customer/Customer";
import CreateCustomer from "./components/customer/CreateCustomer";
import AddNewService from "./components/room/AddNewService";
import Contract from "./components/contract/Contract";
import CreateContract from "./components/contract/CreateContract";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/customers" element={<Customer/>}></Route>
                    <Route path="/customers/create" element={<CreateCustomer/>}></Route>
                    <Route path="/rooms" element={<Room/>}></Route>
                    <Route path="/rooms/create" element={<AddNewService/>}></Route>
                    <Route path="/contracts" element={<Contract/>}></Route>
                    <Route path="/contracts/create" element={<CreateContract/>}></Route>
                </Routes>   
            </BrowserRouter>
        </>
    );
}

export default App;
