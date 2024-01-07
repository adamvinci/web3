import { useContext, useState } from "react";
import { Context as OpinionContext } from "../../contexts/OpinionContext";
const AddOpinion = () => {
    const [newOpinion, setNewOpinion] = useState('');
    const { addOpinion } = useContext(OpinionContext);
    const submitHandler = (e) => {
        e.preventDefault();
        addOpinion(newOpinion)
        setNewOpinion('')
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input value={newOpinion} onChange={e => setNewOpinion(e.target.value)}></input>
                <button> Add Opinion</button>
            </form>
        </div>
    )
}

export default AddOpinion;