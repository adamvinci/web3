import nameService from '../../services/person.js'

const DeleteUser = ({personne,removePerson}) =>{     
console.log(removePerson)
    return(
        <div>
       <button  onClick={()=>removePerson(personne)}>Delete</button>
        </div>
    )
}

export default DeleteUser