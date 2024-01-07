import { useContext } from "react"
import { Context as OpinionContext } from "../../contexts/OpinionContext"
import Button from "../Button/Button";
const ListOpinions = () => {
    const { opinions, vote } = useContext(OpinionContext);
    return (
        <div>
            {opinions.map((opinion) =>
                <div key={opinion.id}>
                    {opinion.name} : {opinion.votes} <Button vote={() => vote(opinion.id)} />
                </div>
            )}
        </div>
    )
}
export default ListOpinions;