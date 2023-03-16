import axios from "axios";

// const peopleApi = () => {
//     const getPeople = () => {
//
//     }
// }

export const getPeople = async () => {
    return axios.get('http://localhost:3001/v1/people')
        .then((res) => res.data);
};

export const getPerson = (id) => async () => {
    return axios.get(`http://localhost:3001/v1/people/${id}`)
        .then((res) => res.data);
};