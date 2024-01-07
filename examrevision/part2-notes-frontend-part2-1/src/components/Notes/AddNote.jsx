import { useState } from "react"

const AddNote = ({ handleSubmit }) => {
    const [title, setTitle] = useState('');
    const submit = (e) => {
        e.preventDefault();
        handleSubmit(e);
        setTitle('')
    }
    return (<div>
        <form data-title={title} onSubmit={submit}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="add a title"></input>
            <div>
                <button type="submit" style={{ width: "100px", height: "100px" }}>ADD </button>
            </div>

        </form>
    </div>)
}

export default AddNote