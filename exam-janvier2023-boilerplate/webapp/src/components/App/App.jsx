import React from 'react';

import { Layout } from 'antd'
import MenuHeader from 'components/Menu/Menu';
import { Routes, Route, useMatch } from 'react-router-dom';
import Help from 'components/Help/Help';
import ListGames from 'components/Games/ListGames';
import Game from 'components/Games/Game';
import { Context as DataContext } from 'contexts/dataContext';
import { useContext } from 'react';

const { Content } = Layout



const App = () => {
  const { error } = useContext(DataContext);
  const { getGameWithSales } = useContext(DataContext);
  const match = useMatch('/games/:id')
  let game = match ? getGameWithSales(match.params.id) : undefined
  return (
    <Layout className="layout">
      <MenuHeader />
      {error && (
        <div style={{ color: 'red', padding: '10px', border: '1px solid red', margin: '10px 0' }}>
          {error}
        </div>
      )}
      <Content style={{ padding: '30px 50px' }}>
        <Routes>
          <Route path="/help" element={<Help />} />
          <Route path="/games" element={<ListGames />} />
          <Route path="/games/:id" element={<Game {...{ game }} />} />
        </Routes>

      </Content>
    </Layout>
  )
}

export default App
