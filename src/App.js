import { Route, Routes } from 'react-router';
import { pathList } from './common/constants.js';
import React from 'react';
import './App.css';
import Header from './components/header/header';
import MainPage from './components/main-page/main-page.jsx';
import ChangeUser from './components/change-user/change-user.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={pathList.main} element={<MainPage/>} />
        <Route path={pathList.change_data} element={<ChangeUser/>} />
      </Routes>
    </>
  );
}

export default App;
