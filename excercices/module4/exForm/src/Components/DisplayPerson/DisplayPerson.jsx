
import DeleteUser from "../DeleteUser/DeleteUser"
const DisplayPersonne = ({ personne,removePerson }) =>{
    return (
        <div>
<li key={personne.id}>{personne.content} {personne.number}</li> <DeleteUser personne={personne} removePerson={removePerson} />
</div>
    )


} 
export default DisplayPersonne