
import { Link } from 'react-router-dom';
const Children = ({ childrens }) => {

    return (
        <div>
            {childrens.map((child) => <div key={child.id}> <Link to={`/children/${child.id}`} > <p>{child.name} </p></Link></div>)}
        </div >
    )
}

export default Children