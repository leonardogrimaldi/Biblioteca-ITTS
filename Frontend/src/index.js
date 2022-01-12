import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import App from './App';
import NavBar from './Components/Navbar';
import Home from './Components/Home'
import SearchBar from './Components/SearchBar'
import BookTable from './Components/BookTable';
import UserWidget from './Components/UserWidget';
import SubNavBar from './Components/SubNavBar';
import LanguageSelect from './Components/LanguageSelect';
import AccountButton from './Components/AccountButton';
import UserTable from './Components/UserTable'
import SearchPage from './Components/SearchPage'
import UserManagement from './Components/UserManagement'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNavBar from './Components/SideNavBar';
import UserForm from './Components/UserForm';




ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> 
          <Route path="/usermanagement" element={<UserForm />}></Route>
        </Route>
        
        <Route path="/search/:nome" element={<SearchPage />}> </Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
