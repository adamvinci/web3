import { Context as cmptContext } from "../../contexts/countersContext";
import { useContext } from "react";
const GoodButton = () => {
    const { increaseGood } = useContext(cmptContext);
    return <button onClick={increaseGood}>increase Good</button>
}

export default GoodButton