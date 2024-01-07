const Person = ({ person, onClose }) => <div> <p> {person.name} {person.phone}</p> <button onClick={onClose}>close</button> </div>

export default Person;