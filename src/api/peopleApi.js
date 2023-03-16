import axios from "axios";

// const peopleApi = () => {
//     const getPeople = () => {
//
//     }
// }

export const getPeople = async () => {
    return axios.get('http://localhost:3001/v1/people')
        .then((res) => {
            console.log('GET people response:', res);
            return res.data;
        })
        .catch((err) => err);
};

export const getPerson = (id) => async () => {
    return axios.get(`http://localhost:3001/v1/people/${id}`)
        .then((res) => {
            console.log(`GET person=${id} response:`, res);
            return res.data;
        })
        .catch((err) => err);
};