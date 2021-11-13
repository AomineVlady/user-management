import { Route, Routes } from 'react-router';
import { pathList } from './common/common.js';
import React from 'react';
import './App.css';
import getUsersDataList from './common/services/main-page.api.js';
import Header from './components/header/header';
import MainPage from './components/main-page/main-page.jsx';
import Popup from './components/popup/popup.jsx';

const App = () => {
  const userList = getUsersDataList();

  return (
    <>
      <Header />
      <Routes>
        <Route path={pathList.main} element={<MainPage userList={userList} />} />
        <Route path={pathList.popup} element={<Popup userList={userList} />} />
      </Routes>
    </>
  );
}

export default App;
