const PersonneLine = ({ personne, deleteHandler }) => {
    return (<div>
        <p>{personne.name} {personne.number}</p>
        <button data-id={personne.id} onClick={deleteHandler}>delete</button>
    </div>

    )
}

export default PersonneLine;