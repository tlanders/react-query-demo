import React from "react";
import {useQuery} from "react-query";
import axios from "axios";
import {getPeople, getPerson} from "../api/peopleApi";
import {Link, useParams} from "react-router-dom";

const PersonView = () => {
    const {personId} = useParams();
    console.log('PersonView - id:', personId);
    const { isLoading, isError, data, error } = useQuery('getPerson', getPerson(personId));
    const person = data;

    console.log('isLoading:', isLoading);
    console.log('isError:', isError);

    if(isLoading) {
        return (<div><p>Loading...</p></div>);
    }
    if (isError) {
        return <div><p>Error: {error.message}</p></div>
    }

    console.log('data:', person);

    return (
        <>
            <h1>Person View</h1>
            <section id={'person-view-main'}>
                <p>
                    <b>{person.name}</b><br/>
                    {person.phone}<br/>
                    {person.email}
                </p>
            </section>
        </>
    );
}

export default PersonView;