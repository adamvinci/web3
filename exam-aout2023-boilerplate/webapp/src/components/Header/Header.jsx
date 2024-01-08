import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom';

const { Header } = Layout


const MenuHeader = () => (
    <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
            <Menu.Item> <Link to="/jokes">Jokes</Link> </Menu.Item>
            <Menu.Item> <Link to="/about">About</Link> </Menu.Item>
        </Menu>
    </Header>
)

export default MenuHeader