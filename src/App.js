import { Route, Routes } from 'react-router';
import { pathList } from './common/constants.js';
import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import ChangeUser from './components/ChangeUser/ChangeUser.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path={pathList.main} element={<MainPage />} />
        <Route path={pathList.change_data} element={<ChangeUser />} />
      </Routes>
    </>
  )
};

export default App;
