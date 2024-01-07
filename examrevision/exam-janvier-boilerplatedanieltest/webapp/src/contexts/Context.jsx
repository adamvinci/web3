import React, { useState, useEffect } from "react";
import { retrieveAll as getAllChildren } from 'services/childrenApi';
import { retrieveAll as getAllEvents } from "services/eventsApi";
const Context = React.createContext(null)


const ProviderWrapper = (props) => {
    const [children, setChildren] = useState([])
    const [events, setEvents] = useState([])

    const modifyChildren = (children) => {
        setChildren(children);
    }
    const modifyEvents = (events) => {
        setEvents(events);
    }

    const getChildWithEvents = (id) => {
        const child = children.find(c => c.id === id)
        const childEvents = events.filter(e => e.child == id)
        const data = {
            ...child,
            events: childEvents
        }
        return data;
    }

    useEffect(() => {
        getAllChildren().then(data => setChildren(data));
        getAllEvents().then(data => setEvents(data))
    }, [])

    const exposedValue = {
        children,
        events,
        modifyChildren,
        modifyEvents,
        getChildWithEvents

    }



    return <Context.Provider value={exposedValue}>
        {props.children}
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper,
}    
