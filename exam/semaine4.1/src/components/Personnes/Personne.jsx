import PersonneLine from "./PersonneLine";

const Personne = ({ persons, deleteHandler }) => {
    return (
        <div>
            {persons.map((p) =>
                <PersonneLine deleteHandler={deleteHandler} key={p.id} personne={p} />
            )}
        </div>
    )
}

export default Personne;