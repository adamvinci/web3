import { Context as cmptContext } from "../../contexts/countersContext";
import { useContext } from "react";
const BadButton = () => {
    const { increaseBad } = useContext(cmptContext);
    return <button onClick={increaseBad}>increase Bad</button>
}

export default BadButton