import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Usesociallogin from './Socialloginprocess/Usesociallogin';
import Mysocialdashboadpage from './Socialloginprocess/Mysocialdashboadpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>}></Route>
        <Route exact path="/Usesociallogin" element={<Usesociallogin/>}/>
        <Route exact path="/Mysocialdashboadpage" element={<Mysocialdashboadpage/>}/>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
