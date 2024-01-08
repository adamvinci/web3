import React from 'react';

import { Layout } from 'antd'
import MenuHeader from 'components/Header/Header';
import { Routes, Route, useMatch } from 'react-router-dom';
import JokesList from 'components/Jokes/JokesList';
import About from 'components/About/About';
import Joke from 'components/Jokes/Joke';
import { Context as DataContext } from 'contexts/dataContext';
import { useContext } from 'react';

const { Content } = Layout



const App = () => {
  const { getJokeWithScores, error } = useContext(DataContext);

  const match = useMatch('/jokes/:id');
  const joke = match ? getJokeWithScores(match.params.id) : undefined;

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
          <Route path="/about" element={<About />} />
          <Route path="/jokes/:id" element={<Joke {...{ joke }} />} />
          <Route path="/jokes" element={<JokesList />} />

        </Routes>

      </Content>
    </Layout>
  )
}

export default App
