import { Context as cmptContext } from "../../contexts/countersContext.jsx";
import { useContext } from "react";
const OkButton = () => {
    const { increaseOk } = useContext(cmptContext);
    return <button onClick={increaseOk}>increase Ok</button>

}

export default OkButton