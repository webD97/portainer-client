import axios from 'axios';

const getAll = async (host: string, token: string) => {
    const url = host + '/api/registries';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getById = async (host: string, token: string, registryId: string) => {
    const url = `${host}/api/registries${registryId}`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

export {
    getAll, getById
};
