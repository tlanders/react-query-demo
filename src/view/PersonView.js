import React from "react";
import {useQuery} from "react-query";
import {getPerson} from "../api/peopleApi";
import {useParams} from "react-router-dom";

const PersonView = () => {
    const {personId} = useParams();
    console.log('PersonView - id:', personId);
    const { isLoading, isError, data, error } = useQuery('getPerson', getPerson(personId));

    if(isLoading) {
        return (<div><p>Loading...</p></div>);
    }
    if (isError) {
        console.log('PersonView - get person error:', error);
        return (<div><p>PersonView error: {error.message}</p></div>);
    }

    const person = data;
    console.log('PersonView data:', person);

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