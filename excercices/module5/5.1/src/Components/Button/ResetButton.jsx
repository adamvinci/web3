import { Context as cmptContext } from "../../contexts/countersContext";
import { useContext } from "react";
const ResetButton = () => {
    const { resetAll } = useContext(cmptContext);
    return <button onClick={resetAll}>Reset All</button>
}

export default ResetButton