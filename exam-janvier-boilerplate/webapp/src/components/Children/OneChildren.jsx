import { useState } from "react";
import { DatePicker } from 'antd';


const OneChildren = ({ childInfo, deleteOneEvent, addOneEvent }) => {
    const [date, setDate] = useState('')
    const onOk = (value) => setDate(new Date(value._d).toISOString());

    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        const dateDefault = date.length === 0 ? new Date().toISOString() : date;
        const newEvent = { child: childInfo.id, name: name, date: dateDefault }
        addOneEvent(newEvent)
        setName('')
        setDate('')
    }

    return (
        <div>
            <h1>Enfant</h1>
            <div>
                <p>{childInfo.name}</p>
                <p>{childInfo.birthDate}</p>
                <p>Gender :{childInfo.gender}</p>
            </div>
            <h1>Evenement</h1>
            {childInfo.events.map((event) => (
                <div key={event.id}>
                    <p>  {event.name}</p>
                    <p>{event.date}</p>
                    <button onClick={() => deleteOneEvent(event.id)}>delete event</button>
                </div>
            ))}
            <div>
                <h1>Add event</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} ></input>
                    <DatePicker showTime onOk={onOk} />

                    <button type="submit"> add event </button>
                </form>
            </div>

        </div>
    )
}

export default OneChildren