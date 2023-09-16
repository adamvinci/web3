import { Context as voteContext } from "../../contexts/countersContext.jsx";
import { useContext } from "react";
import Opinion from "./Opinion.jsx";
const DisplayOpinion = () => {
    const { opinions } = useContext(voteContext)
    return (
        <div>
            {opinions.map((o) =>
                <div key={o.id}>
                    <Opinion o={o} />
                </div>

            )}

        </div>
    )
}

export default DisplayOpinion