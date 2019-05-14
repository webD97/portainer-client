import axios from 'axios';

const getAll = async (host: string, token: string) => {
    const url = host + '/api/endpoints';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getById = async (host: string, token: string, endpointGroupId: string) => {
    const url = `${host}/api/endpoints/${endpointGroupId}`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

export {
    getAll, getById
};
