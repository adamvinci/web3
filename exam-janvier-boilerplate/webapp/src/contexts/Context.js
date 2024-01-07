import React, { useEffect, useState } from 'react';
import ChildrenAPI from "../services/childrenApi"
import EventAPI from "../services/eventsApi"
const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
    const [childrens, setChildrens] = useState([]);
    const [events, setEvents] = useState([])
    const [error, setError] = useState('')

    const deleteOneEvent = (id) => {
        console.log(id)
        EventAPI.remove(id).then(() => setEvents(events.filter((e) => e.id !== id))).catch(error => console.warn(error))
    }
    const addOneEvent = (event) => {
        EventAPI.create(event).then((response) => setEvents([...events, response]))
    }
    const getChildWithEvents = (id) => {
        const child = childrens.find((child) => child.id === id)
        const event = events.filter((event) => event.child === id).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        child['events'] = event
        return child
    }

    useEffect(() => {


        ChildrenAPI.retrieveAll().then((response) => setChildrens(response)).catch(error => setError(error))
        EventAPI.retrieveAll().then((response) => setEvents(response)).catch(error => setError(error))


    }, []);

    const exposedValue = {

        getChildWithEvents,
        deleteOneEvent,
        addOneEvent,
        error,
        setError,
        events,
        childrens
    };

    return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper };
