import React, { useEffect } from 'react';
import { Routes, Route, useMatch, Navigate } from 'react-router-dom';
import { useContext } from "react"

import { Layout } from 'antd'
import Children from '../Children/Childrens.jsx';
import HeaderView from '../Header/Header.jsx';
import Help from '../Help/Help.jsx';
import OneChildren from '../Children/OneChildren.jsx';
import { Context as ChildContext } from "../../contexts/Context.js"
const { Content } = Layout



const App = () => {
  const { error, setError, childrens, getChildWithEvents, deleteOneEvent, addOneEvent } = useContext(ChildContext);

  const match = useMatch("/children/:id");
  let childInfo;


  const changeError = () => { setTimeout(() => setError(''), 5000) }
  useEffect(changeError, [error])

  if (!childrens || childrens.length === 0) {
    return <div>Loading...</div>;
  } else {
    childInfo = match
      ? getChildWithEvents(match.params.id)
      : null;
  }

  return (
    <Layout className="layout">
      <HeaderView />
      <Content style={{ padding: '30px 50px' }}>
        <p style={{ color: 'red' }}> {error}</p>
        <Routes>
          <Route path="/" element={<Navigate to="/children" />} />

          <Route path="/children" element={<Children {...{ childrens }} />} />
          <Route path="/children/:id" element={<OneChildren {...{ childInfo, deleteOneEvent, addOneEvent }} />} />
          <Route path="/help" element={<Help />} />
        </Routes>


      </Content>
    </Layout>
  )
}

export default App
