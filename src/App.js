import { Route, Routes } from 'react-router';
import { pathList } from './common/constants.js';
import React from 'react';
import './App.css';
import getUsersDataList from './common/services/main-page.api.js';
import Header from './components/header/header';
import MainPage from './components/main-page/main-page.jsx';
import Popup from './components/popup/popup.jsx';
import ChangeUser from './components/change-user/change-user.jsx';

const App = () => {
  const userList = getUsersDataList();

  return (
    <>
      <Header />
      <Routes>
        <Route path={pathList.main} element={<MainPage userList={userList} />} />
        <Route path={pathList.popup} element={<Popup userList={userList} />} />
        <Route path={pathList.change_data} element={<ChangeUser userList={userList} />} />
      </Routes>
    </>
  );
}

export default App;
