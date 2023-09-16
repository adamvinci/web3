import AddVote from "../Button/AddVote.jsx";

const Opinion = ({ o }) => {
    return (
        <div>
            <li>{o.content} : {o.nbVotes} <AddVote opinion={o} /> </li>
        </div>

    )
}

export default Opinion