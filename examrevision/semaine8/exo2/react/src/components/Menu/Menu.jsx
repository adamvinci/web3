import { Link } from 'react-router-dom';

const Menu = () => {
    const padding = {
        paddingRight: 5,
    };
    return (
        <div>
            <Link style={padding} to="/">authpr</Link>

            <Link style={padding} to="/book">book</Link>

        </div>
    );
};

export default Menu;
