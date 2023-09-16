import { Context as cmptContext } from "../../contexts/countersContext";
import { useContext } from "react";
const AddVote = ({ opinion }) => {
    const { AddVote, opinions } = useContext(cmptContext);
    const clickHandler = () => {
        const updatedOpinion = { ...opinion, nbVotes: opinion.nbVotes + 1 }
        AddVote(opinions.map((p) => p.id !== opinion.id ? p : updatedOpinion)
        )
    }

    return <button onClick={clickHandler}>Vote</button>
}

export default AddVote