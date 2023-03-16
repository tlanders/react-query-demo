import React from "react";
import {useQuery} from "react-query";
import axios from "axios";
import {getPeople} from "../api/peopleApi";
import {Link} from "react-router-dom";
// import peopleApi from "../api/peopleApi";

const PeopleHome = () => {
    console.log('PeopleHome');
    // const queryClient = useQueryClient();
    const { isLoading, isError, data, error } = useQuery('people', getPeople);

    console.log('isLoading:', isLoading);
    console.log('isError:', isError);

    if(isLoading) {
        return (<div><p>Loading...</p></div>);
    }
    if (isError) {
        return <div><p>Error: {error.message}</p></div>
    }

    console.log('data:', data);

    return (
        <>
            <h1>People</h1>
            <section id={'people-home-main'}>
                {
                    // fakePeople.map(p =>
                    data.map(p =>
                        <p key={`person-${p.id}`}>
                            <Link to={`/people/${p.id}`}>{p.name}</Link><br/>
                            {p.phone}<br/>
                            {p.email}
                        </p>
                    )
                }
            </section>
        </>
    );
}

export default PeopleHome;