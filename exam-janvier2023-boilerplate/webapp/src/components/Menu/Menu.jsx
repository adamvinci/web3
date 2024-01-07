import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const { Header } = Layout
const MenuHeader = () => {
    const [current, setCurrent] = useState('');
    const [path, setPath] = useState('');
    const location = useLocation();


    useEffect(() => {
        console.log("location", location.pathname)
        setPath(location.pathname);
    }, [location]);
    useEffect(() => console.log("update", path), [path])
    const onclick = (e) => {
        setTimeout(() => {
            console.log("click", location)
            console.log(e)
            if (location.pathname !== "/help") {
                setCurrent(e.key);
            } else {
                setCurrent('');
            }
        }, 5000)
    }


    return (
        <div>
            <Header>
                <Menu onClick={onclick} theme="dark" mode="horizontal" selectedKeys={[current]}>
                    <Menu.Item ><Link to="/games">Games</Link></Menu.Item>
                    <Menu.Item ><Link to="/help">Aide</Link></Menu.Item>
                </Menu>
            </Header>
        </div>
    )

}
export default MenuHeader

/*
        border: '1px solid orange',
    };
    const [current, setCurrent] = useState('');
    const location = useLocation();
    useEffect(() => {
        setCurrent(location.pathname)
    }, [location.pathname]);

style={current === '/games' ? style : {}}
*/