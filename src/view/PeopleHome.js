import React from "react";
import {useQuery} from "react-query";
import axios from "axios";
// import peopleApi from "../api/peopleApi";

const PeopleHome = () => {
    console.log('PeopleHome');
    // const queryClient = useQueryClient();
    const { isLoading, isError, data, error } = useQuery('people', () => {
        return axios.get('http://localhost:3001/v1/people')
            .then((res) => {
                console.log('GET people response:', res);
                return res.data;
            })
            .catch((err) => err);
    });

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
                            {p.name}<br/>
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