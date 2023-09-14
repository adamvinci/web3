const DisplayPersonne = ({ personne }) => <li key={personne.id}>{personne.content} {personne.number}</li>

export default DisplayPersonne