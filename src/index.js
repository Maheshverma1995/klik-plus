import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './component/Home';
import About from './component/About';
import Contactus from './component/Contactus';
import Error from './component/Error';
import ARTIFICIAL_INTELLIGENCE from './component/OUR SERVICES/ARTIFICIAL_INTELLIGENCE';
import Rendering_3D from './component/OUR SERVICES/Rendering_3D';
import Software_Development from './component/OUR SERVICES/Software_Development';
import Lms_Development from './component/OUR SERVICES/Lms_Development';
import App_Development from './component/OUR SERVICES/App_Development';
import Rrp_Development from './component/OUR SERVICES/Rrp_Development';
import Vision_And_Mission from './component/Vision_And_Mission';
import Technologies from './component/Technologies';
import Milestone from './component/Milestone';
import Our_Clients from './component/Our_Clients';
import Cloud_services from './component/OUR SERVICES/Cloud_services';
import Digital_Marketing from './component/Digital_Marketing';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Digital_marketing from './component/OUR SERVICES/Digital_marketing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
        <Routes>
           <Route path='' element={<Home/>}/>
           <Route path='about' element={<About/>}/> 
            <Route path='contact' element={<Contactus/>}/>
            <Route path='cloud-services' element={<Cloud_services/>}/>
            <Route path='digital-marketing' element={<Digital_marketing/>}/>
            <Route path='rendering-3d' element={<Rendering_3D/>}/>
            <Route path='software-development' element={<Software_Development/>}/>
            <Route path='lms-development' element={<Lms_Development/>}/>
            <Route path='app-development' element={<App_Development/>}/>
            <Route path='erp-development' element={<Rrp_Development/>}/>
            <Route path='vision-and-mission' element={<Vision_And_Mission/>}/>
            <Route path='technologies' element={<Technologies/>}/>
            <Route path='milestone' element={<Milestone/>}/>
            <Route path='our-clients' element={<Our_Clients/>}/>
            <Route path='artificial-intelligence' element={<ARTIFICIAL_INTELLIGENCE/>}/>
           <Route path='*' element={<Error/>}/>
           </Routes>
        <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
