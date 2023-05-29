import './App.css'
import Navbar from "./components/Navbar/Navbar.tsx";
import {Route, Routes} from "react-router-dom";

import Home from "./Pages/Home.tsx";
import Scan from "./Pages/Scan.tsx";
import Registration from "./Pages/Registration.tsx";
import Client from "./Pages/Client.tsx";
import ErrorPage from "./Pages/ErrorPage.tsx";
import FindClient from "./Pages/FindClient.tsx";

const App = () =>{
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/scan' element={<Scan/>}/>
                <Route path='/create' element={<Registration/>}/>
                <Route path='/client/:id' element={<Client/>}/>
                <Route path='/fiend' element={<FindClient/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </>
    );
}

export default App
