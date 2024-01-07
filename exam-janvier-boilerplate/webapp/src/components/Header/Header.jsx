import { Layout, Menu } from 'antd'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const { Header } = Layout
const HeaderView = () => {
    const [current, setCurrent] = useState('tmp_key-0');

    const onclick = (e) => {
        if (e.domEvent.target.href.split('/')[3] !== "help") {
            setCurrent(e.key)
        } else {
            setCurrent('')
        }
    }

    return (
        <div>
            <Header>
                <Menu onClick={onclick} theme="dark" mode="horizontal" selectedKeys={[current]}>
                    <Menu.Item > <Link to="/children">children</Link></Menu.Item>
                    <Menu.Item> <Link to="/help">Aide</Link></Menu.Item>
                </Menu>
            </Header>
        </div>
    )
}
export default HeaderView