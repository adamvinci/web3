import React from 'react';
import { Layout, Menu } from 'antd'
import { Routes, Route, Link } from 'react-router-dom';
import ChildrenList from 'components/ChildrenList/ChildrenList';

import Child from 'components/Child/Child';
import Help from 'components/Help/Help';

const { Header, Content } = Layout



const App = () => {

  
  return (
    <Layout className="layout">
    <Header>
      <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
        <Menu.Item> <Link to="/"> Enfants</Link> </Menu.Item>
        <Menu.Item>Aide <Link to="/help"> Aide</Link> </Menu.Item>  
      </Menu>
    </Header>
    <Content style={{ padding: '30px 50px' }}>
      <Routes>
        <Route path='/' element={<ChildrenList/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/children/:id' element={<Child />}/>
      </Routes>
    </Content>
  </Layout>
  )
}

export default App
