import { useContext, useState, useEffect } from "react";
import { Context as MyContext } from "contexts/Context";
import { useParams } from "react-router-dom";
import { remove, create } from "services/eventsApi";

const Child = () => {
  const [newEvent, setNewEvent] = useState("");

  const id = useParams().id;
  const { getChildWithEvents, events, modifyEvents, children, modifyChildren } =
    useContext(MyContext);
  console.log(children)
  let data = getChildWithEvents(id);

  const handlerButton = (id) => {
    remove(id);
    modifyEvents(events.filter((e) => e.id != id));
  };
  const handlerEvent = (event) => {
    setNewEvent(event.target.value);
  };

  const onAddEvent = () => {
    const childEvent = {
      name: newEvent,
      date: Date.now().toString(),
      child: id,
    };
    setNewEvent("");
    create(childEvent).then((data) => {
      if (data) {
        modifyEvents(events.concat(data));

      }
    });
  };
  console.log(data.events)
  const childEvent = data.events.sort((a, b) => {
    var c = new Date(a.date).getTime();
    var d = new Date(b.date).getTime();
    return d - c;
  });
  console.log(childEvent)

  return (
    <div>
      <p>Name: {data.name}</p>
      <p>BirthDay: {data.birthDate}</p>
      <p>Sexe: {data.gender}</p>
      <h2>Events</h2>
      {childEvent.map((e) => (
        <div key={e.id}>
          <span> {e.name} </span>
          <span> {e.date} </span>
          <button onClick={() => handlerButton(e.id)}>suppimer</button>
        </div>
      ))}

      <div>
        <h2>Add New Event</h2>
        <input type="text" value={newEvent} onChange={handlerEvent}></input>
        <button onClick={onAddEvent}> Add</button>
      </div>
    </div>
  );
};

export default Child;
