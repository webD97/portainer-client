import axios from 'axios';

const getAll = async (host: string, token: string) => {
    const url = host + '/api/endpoints';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getById = async (host: string, token: string, endpointId: string) => {
    const url = `${host}/api/endpoints/${endpointId}`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

export {
    getAll, getById
};
